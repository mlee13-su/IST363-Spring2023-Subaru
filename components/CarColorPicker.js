import { useState } from 'react';
import Swatches from './Swatches';
import Image from 'next/image';

const CarColorPicker = ({ colors }) => {
    const [activeColor, setActiveColor] = useState(colors[0]);

    return <div>
        <h2>Color picker</h2>
        <div>
            <Image
                src={`/vehicles/crosstrek/crosstrek-${activeColor.slug}.webp`}
                alt={`Crosstrek ${activeColor.name}`}
                width={575}
                height={300}
            />
        </div>
        <Swatches
            colors={colors}
            clickHandler={setActiveColor}
            activeColor={activeColor}
        />
        <h3>{activeColor.name}</h3>
    </div>
}
export default CarColorPicker;