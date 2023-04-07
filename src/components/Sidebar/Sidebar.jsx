import { useState } from "react"
import SidebarDropdownList from "./SidebarDropdownList"
import SidebarDropdownListItem from "./SidebarDropdownListItem"

const styles = {
  sidebarWrapper: `select-none overflow-y-auto`,
  sidebarLink: `w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-secondary`,
  sidebarLinkIcon: `w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`,
  sidebarLinkText: `flex-1 ml-3 text-sm`,
  sidebarLinkBadge: `inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-600 dark:text-gray-100`,
  sidebarLinkCheckBox: `w-4 h-4 text-blue-600 border-gray-300 rounded`,
  sidebarDivider: `h-[1px] my-2 bg-gray-600 border-0 dark:bg-gray-600`,
  sidebarClearFilter: `inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
}

const Sidebar = () => {
  const [checkedItems, setCheckItems] = useState([])

  const handleCheck = e => {
    const item = e.target.name
    const isChecked = e.target.checked
    setCheckItems(prev => isChecked ? [...prev, item] : prev.filter(i => i !== item))
  }

  const items = [
    { label: "Software Engineer", value: "software engineer" },
    { label: "UX/UI Designer", value: "ux-ui" },
    { label: "React Developer", value: "react-developer" },
    { label: "Laravel Developer", value: "laravel-developer" },
    { label: "Back-end Developer", value: "back-end-developer" },
  ]

  return (
    <div className={styles.sidebarWrapper}>
      <SidebarDropdownList title="Top 5 Categories">
        {items.map(item => (
          <SidebarDropdownListItem
            key={item.label}
            label={item.label}
            name={item.value}
            checked={checkedItems.includes(item.value)}
            onCheckBoxChange={handleCheck}
          />
        ))}
      </SidebarDropdownList>

      <hr className={styles.sidebarDivider} />
    </div>
  )
}

export default Sidebar
