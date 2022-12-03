import styles from '../../styles/Home.module.css'


export default function CartPage() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3>Товары в корзине</h3>
                <table>
                    <tr>
                        <td>1</td>
                        <td>Товар 1</td>
                        <td>1 шт</td>
                        <td>$50</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>
                            Всего:
                        </td>
                        <td>
                            $50
                        </td>
                    </tr>
                </table>
            </main>
        </div>
    )
}