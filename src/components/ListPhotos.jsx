import React from 'react';
import Image from './Image';


export default function ListPhotos({ data }) {
    return (
        <div>
            {data.map(item => (
                <Image src={item.url} />
            ))}
        </div>
    )
}