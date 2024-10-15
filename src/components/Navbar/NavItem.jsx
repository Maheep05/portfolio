
// eslint-disable-next-line react/prop-types
export function NavItem({ label, onClick }) {
    return (
        <span
            className="cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:rounded-xl"
            onClick={onClick}
        >
            {label}
        </span>
    );
}
