import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './preview-collection.styles.scss';

/**
 * When the component are rendered or re-rendered everytime the below,
 * function is called that has multiple chain of array function and hence causes a performance issue. 
 * NOTE : we shall address this issue later... 
 */
const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx) =>(idx < 4)).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;