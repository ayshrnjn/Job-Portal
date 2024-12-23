import React from 'react'
import Navbar from '../shared/Navbar'

import { Input } from '../ui/input'
import { Label } from '../ui/label'

function Signup() {
  return (
    <div>
      <Navbar></Navbar>

      <form action="">
        <h1 className='font-bold text-xl mb-5'></h1>
        <div>
          <Label>Full Name</Label>
          <Input
           type="text"
           placeholder="Ayush"
           
           
           />
        </div>
      </form>
    </div>
    
  )
}

export default Signup