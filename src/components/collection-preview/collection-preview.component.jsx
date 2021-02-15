import React from 'react';

const CollectionPreview = ({ items, id, title }) => {
    return (
        <div key={id} className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4).map(item => <div key={item.id}>{item.name}</div>)
                }
            </div>
        </div>
    );

}


export default CollectionPreview;