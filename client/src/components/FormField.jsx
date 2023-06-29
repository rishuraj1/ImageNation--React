import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-5 justify-between items-center'>
                <label
                    htmlFor={name}
                    className='text-slate-950 dark:text-cyan-300 text-2xl font-semibold'
                >
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        onClick={handleSurpriseMe}
                        className='flex justify-center items-center bg-purple-800 p-2 text-cyan-300 rounded-lg'
                    >
                        Surprise Me
                    </button>
                )}
            </div>
            <input
                className='border border-purple-800 w-[400px] rounded-lg p-2 bg-cyan-200 dark:bg-black dark:text-cyan-300'
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default FormField