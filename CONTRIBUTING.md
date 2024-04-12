# Contributing to Calculator

First of all, thank you for considering contributing to Calculator! It's people like you that make the open-source community such a great place.

The following is a set of guidelines for contributing to Calculator, which is hosted in the [tHeStRyNg](https://github.com/tHeStRyNg) GitHub organization. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Improving Documentation](#improving-documentation)
  * [Submitting a Pull Request](#submitting-a-pull-request)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to <EMAIL>.

## I don't want to read this whole thing I just have a question!!!

Great! I'm here to help. You can ask me any questions about how to contribute to Calculator and I will do my best to answer them.

## How Can I Contribute?

You can contribute to Calculator in many ways:

### Reporting Bugs

If you find a bug in the code, you can help us by [opening an issue](https://github.com/tHeStRyNg/calculator/issues/new?assignees=&labels=bug&template=bug_report.md&title=) in our issue tracker. Please include as much information as possible, such as steps to reproduce the bug, the expected and actual behavior, and any relevant error messages.

### Suggesting Enhancements

If you have an idea for an improvement to Calculator, you can [open an issue](https://github.com/tHeStRyNg/calculator/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=) in our issue tracker. Please include a description of the enhancement and why you think it would be useful.

### Improving Documentation

Calculator's documentation could always be improved. You can [open an issue](https://github.com/tHeStRyNg/calculator/issues/new?assignees=&labels=documentation&template=documentation_request.md&title=) in our issue tracker to suggest changes or improvements to the documentation.

### Submitting a Pull Request

If you want to contribute code to Calculator, you can [submit a pull request](https://github.com/tHeStRyNg/calculator/compare) to our GitHub repository. Before you submit your pull request, make sure you follow these guidelines:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and ensure all tests pass.
4. Update the documentation if necessary.
5. Submit a pull request to the `main` branch.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:

```
Fix issue with cursor movement

When moving the cursor using the arrow keys, the cursor would sometimes jump to the beginning of the line instead of moving one character at a time. This was due to a bug in the code that checked whether the cursor was at the beginning of the line.

This commit fixes the bug by ensuring that the cursor is only moved one character at a time, regardless of whether the cursor is 