import React, { useEffect, useState } from 'react'
import { Tooltip } from '@nextui-org/react'
import { IoIosColorPalette } from 'react-icons/io'
const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#00DC82')
  const colors: string[] = [
    '#00DC82',
    '#E879F9',
    '#FB923C',
    '#FBBF24',
    '#FACC15',
    '#A3E635',
    '#38BDF8',
    '#FB7185',
    '#E879F9',
  ]

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor')
    if (savedColor) {
      setSelectedColor(savedColor)
      document.documentElement.style.setProperty('--primary-color', savedColor)
    }
  }, [])

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    document.documentElement.style.setProperty('--primary-color', color)
    localStorage.setItem('selectedColor', color)
  }

  return (
    <div>
      <Tooltip
        content={
          <div style={{ display: 'flex', gap: '5px' }}>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => handleColorChange(color)}
                style={{
                  backgroundColor: color,
                  width: 20,
                  height: 20,
                  cursor: 'pointer',
                  borderRadius: '50%',
                  border: selectedColor === color ? '2px solid white' : 'none',
                }}
              />
            ))}
          </div>
        }
        placement="top"
      >
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
          }}
          className="items-center justify-center flex "
        >
          <IoIosColorPalette size={26} />
        </button>
      </Tooltip>
    </div>
  )
}

export default ColorSelector
