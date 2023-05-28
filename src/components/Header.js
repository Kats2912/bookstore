import React ,{useState} from 'react'
import {AppBar, Toolbar,Tabs,Tab, Typography} from '@mui/material'
//import lbi from '@mui/icons-material/LibraryBooksOutlined'
import LibraryBooksOutlined from '@mui/icons-material/LibraryBooksOutlined'
import {NavLink} from 'react-router-dom'

export default function Header() {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar position = "sticky">
            <Toolbar>
            <Typography>
                <LibraryBooksOutlined/>
                Book Store</Typography>
                <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)}>
                    <Tab LinkComponent={NavLink } to = '/add' label = 'Add Product'/>
                    <Tab LinkComponent={NavLink } to = '/books' label = 'All Books'/>
                    <Tab LinkComponent={NavLink } to = '/aboutus' label = 'About Us'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}
