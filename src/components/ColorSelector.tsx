import React, { useEffect, useState } from 'react'
import { Tooltip } from '@nextui-org/react'
import { IoIosColorPalette } from 'react-icons/io'
import { colors, colorsSecondary, colorsTertiary } from '@/helpers/colors'

const ColorSelector: React.FC = () => {
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState<string>('#00DC82')
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState<string>('#18181B')
 

  useEffect(() => {
    const savedPrimaryColor = localStorage.getItem('selectedPrimaryColor')
    const savedSecondaryColor = localStorage.getItem('selectedSecondaryColor')
    const savedTertiaryColor = localStorage.getItem('selectedTertiaryColor')

    if (savedPrimaryColor) {
      setSelectedPrimaryColor(savedPrimaryColor)
      document.documentElement.style.setProperty('--primary-color', savedPrimaryColor)
    } else {
      document.documentElement.style.setProperty('--primary-color', '#00DC82')
    }

    if (savedSecondaryColor) {
      setSelectedSecondaryColor(savedSecondaryColor)
      document.documentElement.style.setProperty('--secondary-color', savedSecondaryColor)
    } else {
      document.documentElement.style.setProperty('--secondary-color', '#18181B')
    }

    if (savedTertiaryColor) {
     
      document.documentElement.style.setProperty('--tertiary-color', savedTertiaryColor)
    } else {
      document.documentElement.style.setProperty('--tertiary-color', '#2B2B2B')
    }
  }, [])

  const handlePrimaryColorChange = (color: string) => {
    setSelectedPrimaryColor(color)
    document.documentElement.style.setProperty('--primary-color', color)
    localStorage.setItem('selectedPrimaryColor', color)
  }

  const handleSecondaryColorChange = (color: string) => {
    setSelectedSecondaryColor(color)
    document.documentElement.style.setProperty('--secondary-color', color)
    localStorage.setItem('selectedSecondaryColor', color)
  }

  const handleTertiaryColorChange = (color: string) => {
 
    document.documentElement.style.setProperty('--tertiary-color', color)
    localStorage.setItem('selectedTertiaryColor', color)
  }

  return (
    <div>
      <Tooltip
        className="border border-[#3C3C3F]/50"
        
        classNames={{
          content: 'bg-[#2B2B2B]',
        }}
        content={
          <div className="w-[100px] ">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '10px',
                marginTop: '5px',
              }}
            >
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => handlePrimaryColorChange(color)}
                  className="hover:scale-110 transition-all"
                  style={{
                    backgroundColor: color,
                    width: 15,
                    height: 15,
                    cursor: 'pointer',
                    borderRadius: '50%',
                    border:
                      selectedPrimaryColor === color
                        ? '1px solid white'
                        : 'none',
                  }}
                />
              ))}
            </div>

            <div className="bg-[#3C3C3F]/80 h-[1px] w-full my-2"></div>
            <div style={{ display: 'flex', gap: '5px' }}>
              {colorsSecondary.map((color) => (
                <div
                  key={color}
                  onClick={() => handleSecondaryColorChange(color)}
                  className="hover:scale-110 transition-all"
                  style={{
                    backgroundColor: color,
                    width: 15,
                    height: 15,
                    cursor: 'pointer',
                    borderRadius: '50%',
                    marginBottom: '5px',
                    border:
                      selectedSecondaryColor === color
                        ? '1px solid white'
                        : 'none',
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {colorsTertiary.map((color) => (
                <div
                  key={color}
                  onClick={() => handleTertiaryColorChange(color)}
                />
              ))}
            </div>
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
