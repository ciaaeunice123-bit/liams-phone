import React,{createContext,useContext,useEffect,useState} from 'react';
import type {AppId,Chat,Person,Photo,Email,CalEvent,Note,Reminder,FileItem,Alarm,PhoneSettings} from './types';
import {seededChats,seededContacts,seededPhotos,seededEmails,seededEvents,seededNotes,seededReminders,seededFiles,seededAlarms,defaultSettings} from './seed';
export function useStored<T>(key:string,initial:T):[T,React.Dispatch<React.SetStateAction<T>>]{
  const [value,setValue]=useState<T>(()=>{try{
    const raw=localStorage.getItem(`liam-phone:v1:${key}`);if(!raw)return initial;
    const parsed:unknown=JSON.parse(raw);
    if(Array.isArray(initial)){
      if(!Array.isArray(parsed)||parsed.some(item=>!item||typeof item!=='object'||typeof item.id!=='string'))return initial;
      if(key==='chats'&&parsed.some(item=>!Array.isArray(item.messages)))return initial;
      return parsed as T;
    }
    if(initial&&typeof initial==='object'){
      if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))return initial;
      const source=parsed as Record<string,unknown>;
      const defaults=initial as Record<string,unknown>;
      const cleaned:Record<string,unknown>={...defaults};
      for(const field of Object.keys(defaults))if(typeof source[field]===typeof defaults[field])cleaned[field]=source[field];
      if(key==='settings'&&!['dark','light'].includes(String(cleaned.appearance)))cleaned.appearance='light';
      return cleaned as T;
    }
    return parsed as T;
  }catch{return initial}});
  useEffect(()=>{try{localStorage.setItem(`liam-phone:v1:${key}`,JSON.stringify(value))}catch{/* private mode or storage quota */}},[key,value]);
  return [value,setValue];
}
type Store={
  app:AppId|null;openApp:(id:AppId)=>void;goHome:()=>void;lock:()=>void;
  chats:Chat[];setChats:React.Dispatch<React.SetStateAction<Chat[]>>;
  contacts:Person[];setContacts:React.Dispatch<React.SetStateAction<Person[]>>;
  photos:Photo[];setPhotos:React.Dispatch<React.SetStateAction<Photo[]>>;
  emails:Email[];setEmails:React.Dispatch<React.SetStateAction<Email[]>>;
  events:CalEvent[];setEvents:React.Dispatch<React.SetStateAction<CalEvent[]>>;
  notes:Note[];setNotes:React.Dispatch<React.SetStateAction<Note[]>>;
  reminders:Reminder[];setReminders:React.Dispatch<React.SetStateAction<Reminder[]>>;
  files:FileItem[];setFiles:React.Dispatch<React.SetStateAction<FileItem[]>>;
  alarms:Alarm[];setAlarms:React.Dispatch<React.SetStateAction<Alarm[]>>;
  settings:PhoneSettings;setSettings:React.Dispatch<React.SetStateAction<PhoneSettings>>;
  toast:(message:string)=>void;
};
const Ctx=createContext<Store|null>(null);
export const usePhone=()=>{const value=useContext(Ctx);if(!value)throw new Error('Phone context missing');return value};
export function PhoneProvider({children,app,openApp,goHome,lock,toast}:{children:React.ReactNode;app:AppId|null;openApp:(id:AppId)=>void;goHome:()=>void;lock:()=>void;toast:(m:string)=>void}){
  const [chats,setChats]=useStored('chats',seededChats);
  const [contacts,setContacts]=useStored('contacts',seededContacts);
  const [photos,setPhotos]=useStored('photos',seededPhotos);
  const [emails,setEmails]=useStored('emails',seededEmails);
  const [events,setEvents]=useStored('events',seededEvents);
  const [notes,setNotes]=useStored('notes',seededNotes);
  const [reminders,setReminders]=useStored('reminders',seededReminders);
  const [files,setFiles]=useStored('files',seededFiles);
  const [alarms,setAlarms]=useStored('alarms',seededAlarms);
  const [settings,setSettings]=useStored('settings',defaultSettings);
  return <Ctx.Provider value={{app,openApp,goHome,lock,chats,setChats,contacts,setContacts,photos,setPhotos,emails,setEmails,events,setEvents,notes,setNotes,reminders,setReminders,files,setFiles,alarms,setAlarms,settings,setSettings,toast}}>{children}</Ctx.Provider>
}
