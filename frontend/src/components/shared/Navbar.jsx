import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  
  const {user}=useSelector(store=>store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-600">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/jobs">Jobs</Link> </li>
            <li> <Link to="/browse">Browse</Link> </li>
            
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
             <Link to="/login"> <Button variant="outline">Login </Button>  </Link>

              <Link to ="/signup"><Button className="bg-purple-600 hover:bg-purple-700">Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-10 h-10 rounded-full cursor-pointer">
                  {/* Set image size and rounded style */}
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-88">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10 rounded-full cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Ayush Ranjan</h4>
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile"> View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Log Out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
