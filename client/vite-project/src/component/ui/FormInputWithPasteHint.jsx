function FormInputWithPasteHint({ value, onChange, placeholder }) {
    return (
      <div className="flex-1 relative">
        <input
          type="url"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-all"
        />
        <span className="absolute right-3 top-3 text-gray-400 text-sm">⌘V</span>
      </div>
    );
  }
  
  export default FormInputWithPasteHint;
  