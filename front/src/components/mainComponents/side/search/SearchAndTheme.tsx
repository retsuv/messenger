import Search from "./Search";
import ThemeChanger from "./ThemeChanger";

export default function SearchAndTheme() {
    return (
        <div className="flex w-auto justify-between border rounded w-auto py-3 px-5 gap-3">
            <ThemeChanger />
            <Search />
        </div>
    )
}