import Search from "./Search";
import ThemeChanger from "./ThemeChanger";

export default function SearchAndTheme() {
    return (
        <div className="flex w-auto justify-center border items-center rounded w-auto px-6 gap-3 h-3/4">
            {/* <ThemeChanger /> */}
            <Search />
        </div>
    )
}