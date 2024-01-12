import './footer.css'

function Footer(){

    return <div>

{/* Top-1 */}
<div className="Foo-div1">

<img src={require('../../images/olxapp.PNG')} />
    <h1 className='try-the'>TRY THE OLX APP</h1>
<p className='buy-sell'>Buy, sell and find just about anything using <br />
 the app on your mobile.</p>

 <div className='vertical-line'></div>

 <p className='Get-your'>GET YOUR APP TODAY</p>
{/* <img src={require('../../images/social.PNG')} className='social-icon' /> */}

    
</div>
{/* Top-2 */}

<div className="Foo-div2">
{/* list-1 */}

    <div className='list-1'>
        <p>POPULAR CATEGORIES</p>
<li>Car</li>
<li>Flat for rent</li>
<li>Mobile phones</li>
<li>Jobs</li>

</div>
{/* list-2 */}

<div className='list-2'>
    <p>TRENDING SEARCHES
</p>

<li>Bikes</li>
<li>Watches</li>
<li>Books</li>
<li>Dogs</li>
</div>

{/* list-3 */}

<div className='list-3'>
<p>ABOUT US</p>

    <li>Dubizzle group</li>
<li>OLX Blog</li>
<li>Contact Us</li>
<li>OLX for bussiness</li>
</div>
{/* list-4 */}

<div className='list-4'>
<p>OLX</p>

    <li>Help</li>
<li>Sitemap</li>
<li>Terms of use</li>
<li>Privacy Policy</li>
</div>

<img src={require('../../images/lastpic.PNG')} className='follow-us' />

</div>


    </div>
    
}
export default Footer;