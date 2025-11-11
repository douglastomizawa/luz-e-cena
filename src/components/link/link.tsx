import styles from './link.module.css'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Link = ({ children, ...rest }: LinkProps)=> {
  return (
    <a className={styles.link} {...rest}>
        {children}
    </a>
  )
}

export default Link;