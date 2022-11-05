import { useEffect, useState } from 'react';
import axios from "axios";
import defaultConfig from '../assets/defaultConfig.json'
import { HOOKS_VERBOSE } from "@env"

//Adds Authorization Header
import {} from '../libs/axios'

export const getSettings = async () => {
  let settings = await getStoredSettings();
  if (settings !== undefined) {
    console.log("Settings Exists")
    if (HOOKS_VERBOSE === true) console.log(settings)
    return settings;
  }
  return await createSettings();
}

export const resetSettings = async () => {
  await clearAppData();
  await getSettings();
}

export const createSettings = async () => {
  const formData = new FormData();
  const fileMetadata = {
    name: "config.json",
    mimeType: "application/json",
    parents: ["appDataFolder"]
  };
  formData.append('metadata', new Blob([JSON.stringify(fileMetadata)], {
    type: 'application/json',
  }));
  formData.append('file', new Blob([JSON.stringify(defaultConfig)], {
    type: 'application/json'
  }));
  let settings = await axios.post('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', formData);
  console.log("Settings Created")
  if (HOOKS_VERBOSE === true) console.log(settings?.data)
  return settings?.data;
}

export const getStoredSettings = async () => {
  let files = await listFiles();
  let settings = files.find(file => file.title === "config.json")
  if (settings === undefined) return undefined;
  let file = await getFile(settings.id)
  console.log("Settings Found")
  if (HOOKS_VERBOSE === true) console.log(file)
  return file;
}

export const clearAppData = async () => {
  let files = await listFiles();
  files = files.map(file => file.id)

  async function bulk(array){
    const promiseArray = [];
    for (const delay of array) {
      promiseArray.push(deleteFile(delay));
    }
    const valueArray = await Promise.allSettled(promiseArray);
  }

  await bulk(files)
}

export const deleteFile = async (fileID) => {
  await axios.delete('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(fileID));
  console.log("File", fileID, "Deleted")
}

export const listFiles = async () => {
  let files = await axios.get('https://www.googleapis.com/drive/v2/files');
  console.log("Listing Files:", files?.data?.items)
  return files?.data?.items;
}

export const getFile = async (fileID) => {
  let file = await axios.get('https://www.googleapis.com/drive/v2/files/' + encodeURIComponent(fileID) + '?alt=media');
  console.log("File Found")
  if (HOOKS_VERBOSE === true) console.log(file?.data)
  return file?.data;
}

