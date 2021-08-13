import { FilesystemReference } from '../src/FilesystemReference'

const referenceFiles = new FilesystemReference({ type: 'file', multiple: true }, localStorage.filesId ? parseInt(localStorage.filesId) : null)
const referenceFile = new FilesystemReference({ type: 'file', multiple: false }, localStorage.fileId ? parseInt(localStorage.fileId) : null)
const referenceFolder = new FilesystemReference({ type: 'folder', mode: 'readwrite' }, localStorage.folderId ? parseInt(localStorage.folderId) : null)

document.querySelector('#demo-files').addEventListener('click', async () => {
  if (!referenceFiles.id) await referenceFiles.choose()
  localStorage.filesId = referenceFiles.id 
  const files = await referenceFiles.files()
  console.log(files)
})

document.querySelector('#demo-file').addEventListener('click', async () => {
  if (!referenceFile.id) await referenceFile.choose()
  localStorage.fileId = referenceFile.id 
  const file = await referenceFile.file()
  console.log(file)
})

document.querySelector('#demo-folder').addEventListener('click', async () => {
  if (!referenceFolder.id) await referenceFolder.choose()
  localStorage.folderId = referenceFolder.id 
  const folder = await referenceFolder.folder()
  console.log(folder)
})