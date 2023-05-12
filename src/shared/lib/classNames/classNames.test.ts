import { classNames } from './classNames'

describe('classNames', () => {
    test('1st param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('1st param, additional params', () => {
        const expectedClasses = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'] )).toBe(expectedClasses);
    })
    test('all params', () => {
        const expectedClasses = 'someClass class1 class2 hovered clear';
        expect(classNames(
            'someClass', 
            {hovered: true, covered: false, clear: true, hidden: undefined}, 
            ['class1', 'class2'] ))
            .toBe(expectedClasses);
    })
})  