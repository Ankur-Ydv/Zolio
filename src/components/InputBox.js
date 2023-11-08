const InputBox = ({ type, label, id }) => {
  return (
    <>
      <div class="w-full relative">
        <input
          type={type}
          id={id}
          name={id}
          class="w-full block rounded-md px-2.5 pb-2.5 pt-5 text-sm focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default InputBox;
