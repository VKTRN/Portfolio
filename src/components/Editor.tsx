import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

type Props = {
  language: string,
  displayName: string,
  value: string,
  onChange:any
}

export default function Editor({ language, displayName, value, onChange}:Props) {

  const [open, setOpen] = useState(true)

  function handleChange(editor:any, event:any) {

    function lineContainsSomeProperty(index: number){
      return lines[index].includes(":")
    }
    
    function findColon(line: string){
      return line.indexOf(":")
    }
    
    function findSemicolon(line: string){
      return line.indexOf(";")
    }

    function insertChange(line: string){
      const newLine = line.slice(0, charStart) + change + line.slice(charEnd)
      return newLine
    }
    
    function insertLine(index: number){
      let newValue    = ""
      let newLines    = lines
      newLines[index] = newLine


      for (let j = 1; j < newLines.length; j++) {
        newLines[j] = "\n" + newLines[j]
        if(newLines[j].includes(":")){
          newLines[j] = "\t" + newLines[j]
        }
      }

      newLines = newLines.map((line: string) => {return deleteWhiteSpace(line)})

      newValue = newLines.join("")
      return newValue
    }

    function getLines(){
      return editor.display.view.map((a:any) => a.line.text)
    }

    function deleteWhiteSpace(string: string){
      if(/\s/.test(string[string.length-1]) && string.length > 1){
        return string.slice(0, -1)
      }
      return string
    }
  
    const lines       = getLines()
    const change      = event.text
    const changeIndex = event.from.line
    const changeLine  = lines[changeIndex]
    const charStart   = event.from.ch
    const charEnd     = event.to.ch
    
    const colon      = findColon(changeLine)
    const semicolon  = findSemicolon(changeLine)
    const newLine    = insertChange(changeLine)
    const newValue   = insertLine(changeIndex)
    
    const validLine       = lineContainsSomeProperty(changeIndex)
    const afterColon      = charStart > colon
    const beforeSemicolon = charEnd <= semicolon
    const hitEnter        = change.length === 2
    
    if ( validLine && afterColon && beforeSemicolon && !hitEnter) {
      onChange(newValue)
    }
  }
  
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          tabSize:2,
          theme: 'material',
        }}
      />
    </div>
  )
}