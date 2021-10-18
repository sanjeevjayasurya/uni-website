import Content from "./Content"
import Page from "./Page"
import Placeholder from "./Placeholder"

const Components = {
    'page': Page,
    'content': Content
}

const DynamicComponent = ({ blok }) => {
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component]
        return <Component blok={blok} />
    }
    return <Placeholder componentName={blok.component} />
}

export default DynamicComponent