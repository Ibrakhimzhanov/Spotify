function FooterListItem({ children: label }) {
    return (
        <li key={label}>
            <a href="/" className="text-[11px] hover:underline py-2">
                {label}
            </a>
        </li>
    )
}

export default FooterListItem
