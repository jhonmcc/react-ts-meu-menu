import { Avatar, Card } from 'antd'
import { useState } from 'react'

const { Meta } = Card

export const CardView = () => {
    const [loading, setLoading] = useState(true)
    return (
        <Card style={{width: 300}} loading={loading}
            cover={
                <img alt='example' src='urlImg' />
            }
            actions={[
                
            ]}
            >

            <Meta 
                avatar={<Avatar src="imgurl" />}
                title="Card Title"
                description="This is a description"
            />

        </Card>
    )
}
