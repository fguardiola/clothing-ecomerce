import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ items, id, title }) => {
    return (
        <div key={id} className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...restProps }) =>
                            <CollectionItem key={id} {...restProps} />
                        )
                }
            </div>
        </div>
    );

}


export default CollectionPreview;