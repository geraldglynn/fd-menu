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

export const mockProperty = fromJS({
    IsDeleted: false,
    IsAvailable: false,
    HiddenFromUsers: false,
    DisplayOrder: 0,
})
