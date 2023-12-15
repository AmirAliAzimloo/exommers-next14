import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return ( 
       <div className="border-b" >
        <div className="flex h-16 items-center px-4 " >


        <div>this will be a store switcher</div>


        <div>this will be the routes</div>


        <div className="ml-auto flex items-center space-x-4"  >
        <UserButton />
        </div>


        </div>
       </div>
     );
}
 
export default Navbar;