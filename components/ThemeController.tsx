"use client"
import { useTheme } from "@/context/ThemeContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider,
} from "@nextui-org/react";
import { IoColorPaletteOutline, IoSunnyOutline, IoMoonOutline, IoPhonePortraitOutline } from "react-icons/io5";

export default function ThemeController() {
  const { theme, backgroundColorScheme, setTheme, setBackgroundColorScheme, resolvedTheme } = useTheme();

  const themeOptions = [
    { key: 'system', label: 'System', icon: <IoPhonePortraitOutline size={16} /> },
    { key: 'light', label: 'Light', icon: <IoSunnyOutline size={16} /> },
    { key: 'dark', label: 'Dark', icon: <IoMoonOutline size={16} /> },
  ];

  const colorOptions = [
    { key: 'default', label: 'Default', color: 'bg-gradient-to-br from-gray-900 to-black' },
    { key: 'blue', label: 'Ocean Blue', color: 'bg-gradient-to-br from-blue-900 to-blue-700' },
    { key: 'purple', label: 'Purple Galaxy', color: 'bg-gradient-to-br from-purple-900 to-indigo-800' },
    { key: 'green', label: 'Forest Green', color: 'bg-gradient-to-br from-green-900 to-emerald-800' },
    { key: 'red', label: 'Crimson Red', color: 'bg-gradient-to-br from-red-900 to-rose-800' },
    { key: 'orange', label: 'Sunset Orange', color: 'bg-gradient-to-br from-orange-900 to-amber-800' },
  ];

  const getCurrentThemeIcon = () => {
    if (theme === 'system') return <IoPhonePortraitOutline size={20} />;
    if (resolvedTheme === 'light') return <IoSunnyOutline size={20} />;
    return <IoMoonOutline size={20} />;
  };

  return (
    <div className="flex gap-2">
      {/* Theme Selector */}
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="border-[#a800fe] text-white hover:bg-[#a800fe] hover:bg-opacity-20"
            startContent={getCurrentThemeIcon()}
          >
            Theme
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Theme selection"
          selectedKeys={[theme]}
          selectionMode="single"
          onSelectionChange={(keys) => {
            const selectedTheme = Array.from(keys)[0] as string;
            setTheme(selectedTheme as any);
          }}
        >
          {themeOptions.map((option) => (
            <DropdownItem
              key={option.key}
              startContent={option.icon}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* Background Color Selector */}
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="border-[#a800fe] text-white hover:bg-[#a800fe] hover:bg-opacity-20"
            startContent={<IoColorPaletteOutline size={20} />}
          >
            Background
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Background color selection"
          selectedKeys={[backgroundColorScheme]}
          selectionMode="single"
          onSelectionChange={(keys) => {
            const selectedColor = Array.from(keys)[0] as string;
            setBackgroundColorScheme(selectedColor as any);
          }}
        >
          {colorOptions.map((option) => (
            <DropdownItem
              key={option.key}
              startContent={
                <div className={`w-4 h-4 rounded-full ${option.color} border border-gray-300`} />
              }
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}