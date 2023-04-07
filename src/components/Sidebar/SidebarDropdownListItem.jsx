const styles = {
  sidebarLink: `w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-secondary`,
  sidebarLinkBadge: `inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-600 dark:text-gray-100`,
  sidebarLinkCheckBox: `w-4 h-4 text-blue-600 border-gray-300 rounded`,
  sidebarLinkText: `flex-1 ml-3 text-sm`,
 }

const SidebarDropdownListItem = ({ name, checked, onCheckBoxChange}) => {

  return (
    <li className={styles.sidebarLink}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        className={styles.sidebarLinkCheckBox}
        onChange={(e) => onCheckBoxChange(e)}
      />
      <label htmlFor={name} className={styles.sidebarLinkText}>
        {name ?? ""}
      </label>
      <span className={styles.sidebarLinkBadge}>4</span>
    </li>
  )
}

export default SidebarDropdownListItem
