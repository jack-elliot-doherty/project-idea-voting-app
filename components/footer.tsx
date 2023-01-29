import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, themes, setTheme } = useTheme()
  console.log(theme, themes)
  return (
    <footer
      className="text-center py-10 border-t border-t-zinc-200 mt-20
    dark:border-t-zinc-700"
    >
      <div className="">
        <select
          className="form-select py-2 text-sm capitalize leading-none dark:bg-black  bg-gray-300"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((theme: string) =>
            // dont include the system theme
            theme === 'system' ? null : (
              <option key={theme} value={theme}>
                {theme}
              </option>
            )
          )}
        </select>
      </div>
    </footer>
  )
}
