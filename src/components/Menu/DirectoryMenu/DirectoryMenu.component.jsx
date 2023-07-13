import CategoryMenu from '../CategoryMenu/CategoryMenu.component'
import './DirectoryMenu.styles.scss'

const DirectoryMenu = ({categories}) => {

    return (
        <div className="directory-container">
        {categories.map((category) => (
            <CategoryMenu key={category.id} category={category}/>        
        ))}
        </div>
    )
}

export default DirectoryMenu;