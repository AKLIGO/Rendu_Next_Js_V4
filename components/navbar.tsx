
import { NavLinks } from "./nav-link";
import { SearchBar } from "./nav-search";



export const Navbar = () => {
   
    console.log("Navbar rendered");
    return (
        <div>
            <NavLinks />
            <SearchBar />
        </div>
    );
}