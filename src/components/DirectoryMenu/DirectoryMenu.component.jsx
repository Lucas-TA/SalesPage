import CategoryItem from '../CategoryItem/CategoryItem.component'
import './DirectoryMenu.styles.scss'

const DirectoryMenu = ({categories}) => {

    return (
        <div className="directory-container">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>        
        ))}
        </div>
    )
}

export default DirectoryMenu;