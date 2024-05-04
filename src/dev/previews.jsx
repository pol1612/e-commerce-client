import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomePage from "../pages/HomePage.jsx";
import ProductCard from "../components/ProductCard.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/HomePage">
                <HomePage/>
            </ComponentPreview>
            <ComponentPreview path="/ProductCard">
                <ProductCard/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews