import React, {Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Link href="/">
                <a> Home </a>
            </Link>
            <Link href="/about">
                <a> About </a>
            </Link>
            <Link href="/portfolios">
                <a> Portfolios </a>
            </Link>
            <Link href="/blogs">
                <a> blogs </a>
            </Link>
            <Link href="/cv">
                <a> CV </a>
            </Link>

            <style>

            </style>
            </>
          );
    }
} 
export default Header;