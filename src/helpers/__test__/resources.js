import { fromJS } from 'immutable'

const mockMenuItem = fromJS({})

export const mockMenuSection = fromJS({
    MenuSectionId: 123,
    Name: 'Section123',
    Description: 'This is a long description about the Menu Section',
    IsDeleted: false,
    DisplayOrder: 1,
    ImageName: '2T7TarPTQehVDxIYmoO84wDrOg.jpg',
    ImageUrl: 'https://flipdish.imgix.net/2T7TarPTQehVDxIYmoO84wDrOg.jpg',
    CellAspectRatio: 4,
    MenuItems: []
})

const mockMenu = fromJS(
    {
        MenuSections: []
    }
)

export const mockResource = fromJS({
    IsDeleted: false,
    DisplayOrder: 1,
})
