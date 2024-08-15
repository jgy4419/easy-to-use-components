import React from 'react';

const NoItems = ({ item }: {item: string}) => {
    return (
        <div>
            {item} 컴포넌트들이 아직 준비되어 있지 않습니다.
        </div>
    );
};

export default NoItems;