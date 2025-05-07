import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'd-inline-flex align-items-center px-1 pt-1 text-sm font-weight-bold transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-success border-bottom text-danger border-2 border-success'
                    : 'text-dark') +
                className
            }
        >
            {children}
        </Link>
    );
}
