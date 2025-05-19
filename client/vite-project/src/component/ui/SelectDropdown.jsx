function SelectDropdown({ options, value, onChange }) {
    return (
      <div className="relative space-y-2">
        <select
          value={value}
          onChange={onChange}
          className="w-full px-5 py-3 border border-gray-200 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
        >
          <option value="">Browse top summaries...</option>
          {options.map(({ id, title }) => (
            <option key={id} value={id}>
              {title} ({id})
            </option>
          ))}
        </select>
  
        {value && (
          <a
            href={`https://www.youtube.com/watch?v=${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm transition-all block"
          >
            ▶ Preview on YouTube
          </a>
        )}
  
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          ▼
        </div>
      </div>
    );
  }
  
  export default SelectDropdown;
  