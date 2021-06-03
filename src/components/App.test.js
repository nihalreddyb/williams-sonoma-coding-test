import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('header is rendered', () => {
    render(<App />);
    const headerText = screen.getByText("William Sonoma Coding Test - Nihal Reddy Baddam");
    expect(headerText).toBeInTheDocument();
    expect(headerText).toBeVisible();
})

test('link to github is present', () => {
    render(<App />);
    const githubLink = document.querySelector("a").getAttribute('href');
    expect(githubLink).toBe('https://github.com/nihalreddyb/williams-sonoma-coding-test');
})

test('github image is rendered', () => {
    render(<App />);
    const gitHubImage = screen.getByAltText("Github-Nihal");
    expect(gitHubImage).toBeInTheDocument();
    expect(gitHubImage).toBeVisible();
    expect(gitHubImage.src).toContain("githubicon");
})