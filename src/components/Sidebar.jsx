const Sidebar = ({ isOpen, position, children, ...rest }) => {
  const role =
    position === "right"
      ? "right-0 border-l-default"
      : "left-0 border-r-default"
  const hidden = isOpen ? "" : "hidden"

  return (
    <div
      className={`fixed-1 top-0 ${role} ${hidden} w-sm min-h-screen py-3 px-3 hidden lg:block border-gray-600`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Sidebar
