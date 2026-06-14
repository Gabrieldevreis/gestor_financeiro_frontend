import styles from "./styles.module.css";

export function Content({ children }: { children: React.ReactNode }) {
    return(
        <div className={styles.content}>
            {children}
        </div>
    );
}