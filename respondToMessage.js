function respondToMessage(userMessage) {
    const lowercaseUserMessage = userMessage.toLowerCase();
    let response;

    switch (true) {
        
        case lowercaseUserMessage === 'what is your name':
        case lowercaseUserMessage === 'what is ur name':
        case lowercaseUserMessage === 'what is u r name':
        case lowercaseUserMessage === 'wat is ur name':
        case lowercaseUserMessage === 'wat is u r name':
        case lowercaseUserMessage === 'wt is ur name':
        case lowercaseUserMessage === 'wt is ur name':
        case lowercaseUserMessage === 'your name what':
        case lowercaseUserMessage === 'your name wat':
        case lowercaseUserMessage === 'your name wt':
        case lowercaseUserMessage === 'ur name wat':
        case lowercaseUserMessage === 'u r name wat':
        case lowercaseUserMessage === 'ur name wt':
        case lowercaseUserMessage === 'u r name wt':
             response = {
                image:'',
                text : 'ya im bujjii'};
            break;
            case lowercaseUserMessage === 'arunachal pradesh':
             response = {
                image: '<img src="images/arunachal.png" style="width: 250px; height: 200px"/>',
                text: 'There are 25 Districts in Arunachal Pradesh.Arunachal Pradesh is approximately 83,743 square kilometers.'};
            break;
            case lowercaseUserMessage === 'assam':
             response = {
                image: '<img src="images/assam.png" style="width: 250px; height: 200px"/>',
                text: 'There are 25 Districts in Assam.Assam is approximately 78,438 square kilometers.'};
            break;
            case lowercaseUserMessage === 'dadra and nagar haveli and daman and diu':
            response = {
                image: '<img src="images/dadra.png" style="width: 250px; height: 200px;"/>',
                text: 'There are 2 Districts in Dadra and Nagar Haveli and Daman and Diu. Dadra and Nagar Haveli and Daman and Diu is approximately 603 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'delhi':
            response = {
                image: '<img src="images/delhi.png" style="width: 250px; height: 200px;"/>',
                text: 'There are 11 Districts in Delhi (National Capital Territory of Delhi). Delhi is approximately 1,484 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'andaman':
            response = {
                image: '<img src="images/andaman.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 3 Districts in Andaman and Nicobar Islands. Andaman and Nicobar Islands is approximately 8,249 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'chandigarh':
            response = {
                image: '<img src="images/chandigarh.png" style="width: 160px; height: 200px;"/>',
                text: 'There is 1 District in Chandigarh. Chandigarh is approximately 114 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'himachal pradesh':
            response = {
                image: '<img src="images/himachal.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 12 Districts in Himachal Pradesh. Himachal Pradesh is approximately 55,673 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'jharkhand':
            response = {
                image: '<img src="images/jharkhand.png" style="width: 250px; height: 200px;"/>',
                text: 'There are 24 Districts in Jharkhand. Jharkhand is approximately 79,714 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'lakshadweep':
            response = {
                image: '',
                text: 'There is 1 District in Lakshadweep. Lakshadweep is approximately 32 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'madhya pradesh':
            response = {
                image: '<img src="images/madhyapradesh.png" style="width: 250px; height: 200px;"/>',
                text: 'There are 52 Districts in Madhya Pradesh. Madhya Pradesh is approximately 308,252 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'maharashtra':
            response = {
                image: '<img src="images/maharashtra.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 36 Districts in Maharashtra. Maharashtra is approximately 307,713 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'manipur':
            response = {
                image: '<img src="images/manipur.jpg" style="width: 160px; height: 200px;"/>',
                text: 'There are 16 Districts in Manipur. Manipur is approximately 22,327 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'meghalaya':
            response = {
                image: '<img src="images/meghalaya.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 11 Districts in Meghalaya. Meghalaya is approximately 22,429 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'mizoram':
            response = {
                image: '<img src="images/mizoram.png" style="width: 280px; height: 200px;"/>',
                text: 'There are 11 Districts in Mizoram. Mizoram is approximately 21,081 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'nagaland':
            response = {
                image: '<img src="images/nagaland.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 11 Districts in Nagaland. Nagaland is approximately 16,579 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'odisha' || lowercaseUserMessage === 'orissa':
            response = {
                image: '<img src="images/odisha.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 30 Districts in Odisha (Orissa). Odisha (Orissa) is approximately 155,707 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'puducherry' || lowercaseUserMessage === 'pondycheery' || lowercaseUserMessage === 'pondy':
            response = {
                image: '<img src="images/pondy.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 4 Districts in Puducherry. Puducherry is approximately 479 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'punjab':
            response = {
                image: '<img src="images/punjab.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 22 Districts in Punjab. Punjab is approximately 50,362 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'rajasthan':
            response = {
                image: '<img src="images/rajasthan.png" style="width: 250px; height: 200px;"/>',
                text: 'There are 33 Districts in Rajasthan. Rajasthan is approximately 342,239 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'sikkim':
            response = {
                image: '<img src="images/sikkim.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 4 Districts in Sikkim. Sikkim is approximately 7,096 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'telangana':
            response = {
                image: '<img src="images/telangana.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 33 Districts in Telangana. Telangana is approximately 114,840 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'tripura':
            response = {
                image: '<img src="images/tripura.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 8 Districts in Tripura. Tripura is approximately 10,486 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'uttar pradesh':
            response = {
                image: '<img src="images/uttarpradesh.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 75 Districts in Uttar Pradesh. Uttar Pradesh is approximately 243,286 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'uttarakhand':
            response = {
                image: '<img src="images/uttarakhand.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 13 Districts in Uttarakhand. Uttarakhand is approximately 53,483 square kilometers.'
            };
            break;
        case lowercaseUserMessage === 'west bengal':
            response = {
                image: '<img src="images/westbengal.png" style="width: 160px; height: 200px;"/>',
                text: 'There are 23 Districts in West Bengal. West Bengal is approximately 88,752 square kilometers.'
            };
            break;
            case lowercaseUserMessage === 'bihar':
             response = {
                image: '<img src="images/bihar.png" "width: 160px; height: 200px"/>',
                text: 'There are 38 Districts in Bihar.Bihar is approximately 94,163 square kilometers.'};
            break;
            case lowercaseUserMessage === 'chhattisgarh':
             response = {
                image: '<img src="images/chat.png" "width: 160px; height: 200px"/>',
                text: 'There are 28 Districts in Chhattisgarh.Chhattisgarh is approximately 135,192 square kilometers.'};
            break;
            case lowercaseUserMessage === 'gujarat':
             response = {
                image: '<img src="images/gujarat.png" "width: 160px; height: 200px"/>',
                text: 'There are 33 Districts in Gujarat.Gujarat is approximately 196,024 square kilometers.'};
            break;
            case lowercaseUserMessage === 'haryana':
             response = {
                image: '<img src="images/haryana.png" "width: 160px; height: 200px"/>',
                text: 'There are 22 Districts in Haryana.Haryana is approximately 44,212 square kilometers.'};
            break;
            case lowercaseUserMessage === 'goa':
             response = {
                image: '<img src="images/goa.png" "width: 160px; height: 200px"/>',
                text: 'There are 2 Districts<b>(North Goa and South Goa)</b> in Goa.Goa is approximately 3,702 square kilometers.'};
            break;
            case lowercaseUserMessage === 'gandhi':
             response = {
                image: '<img src="images/gandhi.png" "width: 160px; height: 200px"/>',
                text: 'Mahatma Gandhi, born on October 2, 1869, in Porbandar, India, led India to independence through nonviolent resistance, notably the Salt March; he advocated Hindu-Muslim unity, simplicity, and self-sufficiency, but tragically, he was assassinated on January 30, 1948, leaving a lasting legacy in peace and social justice.'};
            break;
            case lowercaseUserMessage === 'nehru':
            response = {
                image: '<img src="images/nehru.jpg" style="width: 160px; height: 200px;"/>',
                text: 'Jawaharlal Nehru, born on November 14, 1889, in Allahabad, India, was the first Prime Minister of India, serving from 1947 to 1964. He played a crucial role in the Indian independence movement and laid the foundation for modern India with his focus on democracy, secularism, and social justice.'
            };
            break;
            case lowercaseUserMessage === 'sardar vallabhbhai patel' || lowercaseUserMessage === 'patel':
            response = {
                image: '<img src="images/patel.jpg" style="width: 160px; height: 200px;"/>',
                text: 'Vallabhbhai Patel, born on October 31, 1875, in Nadiad, India, was a key figure in the Indian independence movement. He played a pivotal role in the integration of princely states into the Indian Union and is often referred to as the "Iron Man of India."'
            };
            break;
            case lowercaseUserMessage === 'list of kerala chief ministers':
             response = {
                image:'',
                text : 'E. M. S. Namboodiripad - March 1957 to July 1959, Pattom A. Thanu Pillai - February 1960 to October 1962, R. Sankar - March 1962 to September 1964, E. M. S. Namboodiripad - March 1967 to October 1969, C. Achutha Menon - March 1970 to October 1970, M. Bhaskaran - October 1970 to March 1977, K. Karunakaran - March 1977 to October 1979, A. K. Antony - October 1979 to March 1980, C. H. Mohammed Koya - October 1981 to February 1982, K. Karunakaran - May 1982 to March 1987, E. K. Nayanar - March 1987 to June 1991, K. Karunakaran - June 1991 to March 1995, A. K. Antony - March 1995 to May 1996, E. K. Nayanar - May 1996 to May 2001, A. K. Antony - May 2001 to August 2004, Oommen Chandy - August 2004 to May 2006, V. S. Achuthanandan - May 2006 to May 2011, Oommen Chandy - May 2011 to May 2016, Pinarayi Vijayan - May 2016 onwards.'};
            break;
        case lowercaseUserMessage === 'list of andhra pradesh chief ministers':
             response = {
                image:'',
                text : 'N. Chandrababu Naidu - September 1995 to May 2004, Y. S. Rajasekhara Reddy - May 2004 to September 2009, K. Rosaiah - September 2009 to November 2010, N. Kiran Kumar Reddy - November 2010 to March 2014, N. Chandrababu Naidu - June 2014 to May 2019, Y. S. Jaganmohan Reddy - May 2019 onwards.'};
            break;
        case lowercaseUserMessage === 'list of tamilnadu chief ministers':
             response = {
                image:'',
                text : 'A. Subbarayalu Reddiar - January 1921 to July 1926, Raja of Panagal - July 1926 to April 1930, B. Munuswamy Naidu - April 1930 to October 1936, C. Rajagopalachari - April 1937 to April 1947, O. P. Ramaswamy Reddiar - April 1947 to April 1952, Kumaraswami Kamaraj - April 1952 to October 1963, M. Bhaktavatsalam - March 1963 to January 1969, M. G. Ramachandran (MGR) - January 1977 to December 1987, Janaki Ramachandran - January 1988 to January 1989, M. Karunanidhi - January 1969 to March 1976, January 1989 to May 1991, May 1996 to May 2001, May 2006 to March 2011, J. Jayalalithaa - June 1991 to May 1996, March 2002 to May 2006, May 2011 to September 2014, May 2015 to December 2016, O. Panneerselvam - September 2001 to March 2002, December 2016 to February 2017 (Acting Chief Minister), Edappadi K. Palaniswami - February 2017 to May 2021,M.K.Stalin -2021 to present'};
            break;
        case lowercaseUserMessage === 'list of union territories':
             response = {
                image:'',
                text : 'Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Lakshadweep, Delhi (National Capital Territory of Delhi), Puducherry, Jammu and Kashmir, Ladakh.'};
            break;
        case lowercaseUserMessage === 'list of states':
             response = {
                image:'',
                text : 'Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal.'};
            break;
        case lowercaseUserMessage === 'list of prime ministers':
             response = {
                image:'',
                text : 'Jawaharlal Nehru (1947–1964),Gulzarilal Nanda (Acting) (1964, 1966),Lal Bahadur Shastri (1964–1966),Gulzarilal Nanda (Acting) (1966),Indira Gandhi (1966–1977),Morarji Desai (1977–1979),Charan,Singh (1979–1980),Indira Gandhi (1980–1984),Rajiv Gandhi (1984–1989),Vishwanath Pratap Singh (1989–1990),Chandra Shekhar (1990–1991),P. V. Narasimha Rao (1991–1996),Atal Bihari Vajpayee (1996, 1998–2004),H. D. Deve Gowda (1996–1997),I. K. Gujral (1997–1998),Manmohan Singh (2004–2014),Narendra Modi (2014–present)'};
            break;

        case lowercaseUserMessage === 'list of presidents':
             response = {
                image:'',
                text : 'Dr. Rajendra Prasad (1950–1962),Dr. Sarvepalli Radhakrishnan (1962–1967),Dr. Zakir Husain (1967–1969),V. V. Giri (1969–1974),Fakhruddin Ali Ahmed (1974–1977),Neelam Sanjiva Reddy (1977–1982),Giani Zail Singh (1982–1987),R. Venkataraman (1987–1992),Dr. Shankar Dayal Sharma (1992–1997),K. R. Narayanan (1997–2002),Dr. A. P. J. Abdul Kalam (2002–2007),Pratibha Patil (2007–2012),Pranab Mukherjee (2012–2017),Ram Nath Kovind (2017–2022),Droupadi Murmu(2022-present)'};
            break;
        case lowercaseUserMessage === '1 amendment':
             response = {
                image:'',
                text : 'Amend Articles 15, 19, 85, 87, 174, 176, 341, 342, 372 and 376.Insert articles 31A and 31B.Insert schedule 9.Amended In 18 June 1951, this amendment was enacted to address issues related to freedom of speech and expression, and to provide for reasonable restrictions on the exercise of these rights.'};
            break;
        case lowercaseUserMessage === '2 amendment':
             response = {
                image:'',
                text : 'Amended In 1952,Amend article 81(1)(b). Removed the upper population limit for a parliamentary constituency by amending Article 81(1)(b) of the Constitution.'};
            break;
        case lowercaseUserMessage === '3 amendment':
             response = {
                image:'',
                text : 'Amended In 22 Feb 1955.Amend schedule 7.Re-enacted entry 33 of the Concurrent List in the Seventh Schedule with relation to include trade and commerce in, and the production, supply and distribution of four classes of essential commodities, viz., foodstuffs, including edible oil seeds and oils}; cattle fodder, including oilcakes and other concentrates}; raw cotton whether ginned or unginned, and cotton seeds}; and raw jute.'};
            break;
        case lowercaseUserMessage === '4 amendment':
             response = {
                image:'',
                text : 'Amended In 27 April 1955 .Amend articles 31, 31A, and 305.Amend schedule 9.Restrictions on property rights and inclusion of related bills in Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '5 amendment':
             response = {
                image:'',
                text : 'Amended In 24 Dec 1955.Amend article 3.Empowered the President to prescribe a time limit for a State Legislature to convey its views on proposed Central laws relating to the formation of new States and alteration of areas, boundaries or names of existing States. Also permitted the President to extend the prescribed limit, and prohibited any such bill from being introduced in Parliament until after the expiry of the prescribed or extended period.'};
            break;
        case lowercaseUserMessage === '6 amendment':
             response = {
                image:'',
                text : 'Amended In 11 Sept 1956.Amend articles 269 and 286.Amend the Union List and State List with respect to raising of taxes.'};
            break;
        case lowercaseUserMessage === '7 amendment':
             response = {
                image:'',
                text : 'Amended In 1 Nov 1956,Amend articles 1, 3, 49, 80, 81, 82, 131, 153, 158, 168, 170, 171, 216, 217, 220, 222, 224, 230, 231 and 232.Insert articles 258A, 290A, 298, 350A, 350B, 371, 372A and 378A.Amend part 8.Amend schedules 1, 2, 4 and 7. it facilitated the reorganization of states along linguistic lines and the creation of new states and union territories.'};
            break;
        case lowercaseUserMessage === '8 amendment':
             response = {
                image:'',
                text : 'Amended In 5 Jan 1960,Amend article 334.Extended the period of reservation of seats for the Scheduled Castes and Scheduled Tribes and Anglo-Indians in the Lok Sabha and the State Legislative Assemblies till 1970.'};
            break;
        case lowercaseUserMessage === '9 amendment':
             response = {
                image:'',
                text : 'Amended In 28 Nov 1960,Amend schedule 1.Minor adjustments to territory of Indian Union consequent to agreement with Pakistan for settlement of disputes by demarcation of border villages, etc.'};
            break;
        case lowercaseUserMessage === '10 amendment':
             response = {
                image:'',
                text : 'Amended In 11 Aug 1961,Amend article 240.Amend schedule 1.Incorporation of Dadra and Nagar Haveli as a Union Territory, consequent to acquisition from Portugal.'};
            break;
        case lowercaseUserMessage === '11 amendment':
             response = {
                image:'',
                text : 'Amended In 19 Dec 1961,Amend articles 66 and 71.Election of Vice President by Electoral College consisting of members of both Houses of Parliament, instead of election by a Joint Sitting of Parliament. Indemnify the President and Vice President Election procedure from challenge on grounds of existence of any vacancies in the electoral college.'};
            break;
        case lowercaseUserMessage === '12 amendment':
             response = {
                image:'',
                text : 'Amended In 20 Dec 1961,Amend article 240.Amend schedule 1.Incorporation of Goa, Daman and Diu as a Union Territory, consequent to acquisition from Portugal.'};
            break;
        case lowercaseUserMessage === '13 amendment':
             response = {
                image:'',
                text : 'Amended In 1 Dec 1962,Amend article 170.Insert new article 371A.Formation of State of Nagaland, with special protection under Article 371A.'};
            break;
        case lowercaseUserMessage === '14 amendment':
             response = {
                image:'',
                text : 'Amended In 28 Dec 1962,Amend articles 81 and 240.Insert article 239A.Amend schedules 1 and 4.Incorporation of Pondicherry into the Union of India and creation of Legislative Assemblies for Himachal Pradesh, Tripura, Manipur and Goa.'};
            break;
        case lowercaseUserMessage === '15 amendment':
             response = {
                image:'',
                text : 'Amended In 5 Oct 1963,Amend articles 124, 128, 217, 222, 224, 226, 297, 311 and 316.Insert article 224A.Amend schedule 7.Raise retirement age of High Court judges from 60 to 62 and other minor amendments for rationalising interpretation of rules regarding judges etc.'};
            break;
        case lowercaseUserMessage === '16 amendment':
             response = {
                image:'',
                text : 'Amended In 5 Oct 1963,Amend articles 19, 84 and 173.Amend schedule 3.Make it obligatory for seekers of public office to swear their allegiance to the Indian Republic and prescribe the various obligatory templates.'};
            break;
        case lowercaseUserMessage === '17 amendment':
             response = {
                image:'',
                text : 'Amended In 20 June 1964,Amend article 31A.Amend schedule 9.To secure the constitutional validity of acquisition of Estates and place land acquisition laws in Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '18 amendment':
             response = {
                image:'',
                text : 'Amended In 27 Aug 1966,Amend article 3.Technical Amendment to include Union Territories in Article 3 and hence permit reorganisation of Union Territories.'};
            break;
        case lowercaseUserMessage === '19 amendment':
             response = {
                image:'',
                text : 'Amended In 11 Dec 1966,Amend articles 324.Abolish Election Tribunals and enable trial of election petitions by regular High Courts.'};
            break;
        case lowercaseUserMessage === '20 amendment':
             response = {
                image:'',
                text : 'Amended In 22 Dec 1966,Amend articles 233A.Indemnify & validate judgments, decrees, orders and sentences passed by judges and to validate the appointment, posting, promotion and transfer of judges barring a few who were not eligible for appointment under article 233. Amendment needed to overcome the effect of judgment invalidating appointments of certain judges in the state of Uttar Pradesh.'};
            break;
        case lowercaseUserMessage === '21 amendment':
             response = {
                image:'',
                text : 'Amended In 10 April 1967.Amend schedule 8.Include Sindhi as an official language.'};
            break;
        case lowercaseUserMessage === '22 amendment':
             response = {
                image:'',
                text : 'Amended In 25 Sept 1969,Amend article 275,Insert Articles 244A and 371B.Provision to form Autonomous states within the State of Assam.'};
            break;
        case lowercaseUserMessage === '23 amendment':
             response = {
                image:'',
                text : 'Amended In 23 Jan 1970,Amend articles 330, 332, 333 and 334.Discontinued reservation of seats for the Scheduled Tribes in Nagaland, both in the Lok Sabha and the State Legislative Assembly and stipulated that not more than one Anglo-Indian could be nominated by the Governor to any State Legislative Assembly. Extend reservation for SCs and STs and Anglo Indian members in the Lok Sabha and State Assemblies for another ten years, i.e. up to 1980.'};
            break;
        case lowercaseUserMessage === '24 amendment':
             response = {
                image:'',
                text : 'Amended In 5 Nov 1971,Amend articles 13 and 368.Article 13(4) added. Enable parliament to dilute fundamental rights through amendments to the constitution.It was made co compulsory for the president to give consent to the constitution amendment.s bill'};
            break;
        case lowercaseUserMessage === '25 amendment':
             response = {
                image:'',
                text : 'Amended In 8 Dec 1971,Amend article 31.Insert article 31C.Restrict property rights and compensation in case the state takes over private property.However, the Supreme Court quashed a part of Article 31C (4) to the extent it took away the power of judicial review. This was done in the landmark case of Kesavananda Bharati v.State of Kerala (1973) 4 SCC 225 which for the first time enunciated the Basic structure doctrine.'};
            break;
        case lowercaseUserMessage === '26 amendment':
             response = {
                image:'',
                text : 'Amended In 28 Dec 1971,Amend article 366.Insert article 363A.Remove articles 291 and 362.Abolition of privy purse paid to former rulers of princely states which were incorporated into the Indian Republic.'};
            break;
        case lowercaseUserMessage === '27 amendment':
             response = {
                image:'',
                text : 'Amended In (i)30 December 1971 & (ii) 15 February 1972,Amend articles 239A and 240.Insert articles 239B and 371C.Reorganisation of Mizoram into a Union Territory with a legislature and council of ministers.'};
            break;
        case lowercaseUserMessage === '28 amendment':
             response = {
                image:'',
                text : 'Amended In 29 Aug 1972,Insert article 312A.Remove article 314.Rationalise Civil Service rules to make it uniform across those appointed prior to Independence and post independence.'};
            break;
        case lowercaseUserMessage === '29 amendment':
             response = {
                image:'',
                text : 'Amended In 9 June 1972.Amend schedule 9.Kerala land reform acts and amendments to these act placed under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '30 amendment':
             response = {
                image:'',
                text : 'Amended In 9 June 1972,Amend article 133.Change the basis for appeals in Supreme Court of India in case of Civil Suits from value criteria to one involving substantial question of law.'};
            break;
        case lowercaseUserMessage === '31 amendment':
             response = {
                image:'',
                text : 'Amended In 17 Oct 1973,Amend articles 81,330 and 332.Increase size of Parliament from 525 to 545 seats. Increased seats going to the new states formed in North East India and minor adjustment consequent to 1971 Delimitation exercise.'};
            break;
        case lowercaseUserMessage === '32 amendment':
             response = {
                image:'',
                text : 'Amended In 1 July 1974,Amend article 371.Insert articles 371D and 371E.Amend schedule 7.Protection of regional rights in Telangana and Andhra regions of State of Andhra Pradesh.Supreme Court in P. Sambamurthy v. State of Andhra Pradesh 1987 SCC (1) 362 held clause (3) and (5) along with its Proviso of Article 371D as unconstitutional and void. It was found to be violative of basic structure doctrine, against the concept of justice and the principle of the rule of law.'};
            break;
        case lowercaseUserMessage === '33 amendment':
             response = {
                image:'',
                text : 'Amended In 19 May 1974,Amend article 101 And 190.Prescribes procedure for resignation by members of parliament and state legislatures and the procedure for verification and acceptance of resignation by house speaker.'};
            break;
        case lowercaseUserMessage === '34 amendment':
             response = {
                image:'',
                text : 'Amended In 7 Sept 1974,Amend schedule 9.Place land reform acts and amendments to these act under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '35 amendment':
             response = {
                image:'',
                text : 'Amended In 1 March 1975,Amend articles 80 and 81.Insert article 2A.Insert schedule 10.Terms and Conditions for the Incorporation of Sikkim into the Union of India.'};
            break;
        case lowercaseUserMessage === '36 amendment':
             response = {
                image:'',
                text : 'Amended In 26 April 1975,Amend articles 80 and 81.Insert article 371F.Remove article 2A.Amend schedules 1 and 4.Remove schedule 10.Formation of Sikkim as a State within the Indian Union.'};
            break;
        case lowercaseUserMessage === '37 amendment':
             response = {
                image:'',
                text : 'Amended In 3 May 1975,Insert article 239A and 240.Formation of Arunachal Pradesh legislative assembly.'};
            break;
        case lowercaseUserMessage === '38 amendment':
             response = {
                image:'',
                text : 'Amended In 1 Aug 1975.Amend articles 123, 213, 239B, 352, 356, 359 and 360.Enhances the powers of President and Governors to pass ordinances.'};
            break;
        case lowercaseUserMessage === '39 amendment':
             response = {
                image:'',
                text : 'Amended In 10 Aug 1975,Amend articles 71 and 329.Insert article 329A.Amend schedule 9.Amendment designed to negate the judgement of Allahabad HC in State of Uttar Pradesh v. Raj Narain 1975 SCR (3) 333 invalidating PM Indira Gandhi\'s election to parliament. Amendment placed restrictions on judicial scrutiny of post of Prime Minister.[47] Irrespective of electrol malpractice, no case can filed against president, vice president, speaker of lok sabha and prime minister.Later, clauses (4) and (5) of Article 329A were struck down by the Supreme Court in Indira Nehru Gandhi v. Raj Narain 1976 SCR 347, for being in violation of basic structure.'};
            break;
        case lowercaseUserMessage === '40 amendment':
             response = {
                image:'',
                text : 'Amended In 29 May 1976,Amend article 297.Amend schedule 9.Enable Parliament to make laws with respect to Exclusive Economic Zone and vest the mineral wealth with Union of India.Place land reform & other acts and amendments to these act under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '41 amendment':
             response = {
                image:'',
                text : 'Amended In 7 Sept 1976,Amend article 316.Raise Retirement Age Limit of Chairmen and Members of Joint Public Service Commissions and State Public Service Commissions from sixty to sixty two. No case can be filed against prime minister, governor, president, even after they demit office (which was later struck down by supreme court).'};
            break;
        case lowercaseUserMessage === '42 amendment':
             response = {
                image:'',
                text : 'Amended In 3 January, 1 February & 1 April 1977,Amend articles 31, 31C, 39, 55, 74, 77, 81, 82, 83, 100, 102, 103, 105, 118, 145, 150, 166, 170, 172, 189, 191, 192, 194, 208, 217, 225, 226,227,228, 311, 312, 330, 352, 353, 356, 357, 358, 359, 366, 368 and 371F.Insert articles 31D, 32A, 39A, 43A, 48A, 131A, 139A, 144A, 226A, 228A and 257A.Insert parts 4A and 14A.Amend schedule 7.Amendment passed during internal emergency by Indira Gandhi. Provides for curtailment of fundamental rights, imposes fundamental duties and changes to the basic structure of the constitution by making India a "Sovereign Socialist Secular Democratic Republic".However, the Supreme Court, in Minerva Mills v. Union of India 1980 SCC (3) 625, quashed the amendments to Articles 31C and 368 as it was in contravention with the basic structure of the Constitution.'};
            break;
        case lowercaseUserMessage === '43 amendment':
             response = {
                image:'',
                text : 'Amended In 13 April 1978.Amend articles 145, 226, 228 and 366.Remove articles 31D, 32A, 131A, 144A, 226A and 228A.Amendment passed after revocation of internal emergency in the Country. Repeals some of the more "Anti-Freedom" amendments enacted through Amendment Bill 42.'};
            break;
        case lowercaseUserMessage === '44 amendment':
             response = {
                image:'',
                text : 'Amended In 20 June, 1 August & 6 September 1979.Amend articles 19, 22, 30, 31A, 31C, 38, 71, 74, 77, 83, 103, 105, 123, 132, 133, 134, 139A, 150, 166, 172, 192, 194, 213, 217, 225, 226, 227, 239B, 329, 352, 356, 358, 359, 360 and 371F.Insert articles 134A and 361A.Remove articles 31, 257A and 329A.Amend part 12.Amend schedule 9.Amendment passed after revocation of internal emergency in the Country.Article 19(1)(f) right to property was omitted. Provides for human rights safeguards and mechanisms to prevent abuse of executive and legislative authority. Annuls some Amendments enacted in Amendment Bill 42..'};
            break;
        case lowercaseUserMessage === '45 amendment':
             response = {
                image:'',
                text : 'Amended In 25 January 1980.Amend article 334.Extend reservation for SCs and STs and nomination of Anglo Indian members in Parliament and State Assemblies for another ten years i.e. up to 1990.'};
            break;
        case lowercaseUserMessage === '46 amendment':
             response = {
                image:'',
                text : 'Amended In 2 February 1983.Amend articles 269, 286 and 366.Amend schedule 7.Amendment to negate judicial pronouncements on scope and applicability on Sales Tax.'};
            break;
        case lowercaseUserMessage === '47 amendment':
             response = {
                image:'',
                text : 'Amended In 26 August 1984.Amend schedule 9.Place land reform acts and amendments to these act under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '48 amendment':
             response = {
                image:'',
                text : 'Amended In 1 April 1985.Amend article 356.Article 356 amended to permit President\'s rule up to two years in the state of Punjab.'};
            break;
        case lowercaseUserMessage === '49 amendment':
             response = {
                image:'',
                text : 'Amended In 11 September 1984.Amend article 244.Amend schedules 5 and 6.Recognise Tripura as a tribal state and enable the creation of a Tripura Tribal Areas Autonomous District Council.'};
            break;
        case lowercaseUserMessage === '50 amendment':
             response = {
                image:'',
                text : 'Amended In 11 September 1984.Amend article 33.Technical Amendment to curtailment of Fundamental Rights as per Part III as prescribed in Article 33 to cover Security Personnel protecting property and communication infrastructure.'};
            break;
        case lowercaseUserMessage === '51 amendment':
             response = {
                image:'',
                text : 'Amended In 16 June 1986.Amend articles 330 and 332.Provide reservation to Scheduled Tribes in Nagaland, Meghalaya, Mizoram and Arunachal Pradesh in Loksabha, similarly for Meghalaya and Arunachal in their Legislative Assemblies.'};
            break;
        case lowercaseUserMessage === '52 amendment':
             response = {
                image:'',
                text : 'Amended In 1 March 1985.Amend articles 101, 102, 190 and 191.Insert schedule 10.Anti Defection Law Provide disqualification of members from parliament and assembly in case of defection from one party to other.However, para 7 of the 10th Schedule was struck down by the Supreme Court in the case of Kihoto Hollohan v. Zachillhu 1992 SCR (1) 686, for being in contravention with Article 368 of the Constitution.'};
            break;
        case lowercaseUserMessage === '53 amendment':
             response = {
                image:'',
                text : 'Amended In 20 February 1986.Insert article 371G.Special provision with respect to the State of Mizoram.'};
            break;
        case lowercaseUserMessage === '54 amendment':
             response = {
                image:'',
                text : 'Amended In 1 April 1986.Amend articles 125 and 221.Amend schedule 2.Increase the salary of Chief Justice of India & other Judges and to provide for determining future increases without the need for constitutional amendment.'};
            break;
        case lowercaseUserMessage === '55 amendment':
             response = {
                image:'',
                text : 'Amended In 20 February 1987.Insert article 371H.Special powers to Governor consequent to formation of state of Arunachal Pradesh.'};
            break;
        case lowercaseUserMessage === '56 amendment':
             response = {
                image:'',
                text : 'Amended In 30 May 1987.Insert article 371I.Transition provision to enable formation of state of Goa.'};
            break;
        case lowercaseUserMessage === '57 amendment':
             response = {
                image:'',
                text : 'Amended In 21 September 1987.Amend article 332.Provide reservation to Scheduled Tribes in Nagaland, Meghalaya, Mizoram and Arunachal Pradesh Legislative Assemblies.'};
            break;
        case lowercaseUserMessage === '58 amendment':
             response = {
                image:'',
                text : 'Amended In 9 December 1987.Insert article 394A.Amend part 22.Provision to publish authentic Hindi translation of constitution as on date and provision to publish authentic Hindi translation of future amendments.'};
            break;
        case lowercaseUserMessage === '59 amendment':
             response = {
                image:'',
                text : 'Amended In 30 March 1988.Amend article 356.Insert article 359A.Article 356 amended to permit President\'s rule up to three years in the state of Punjab, Articles 352 and Article 359A amended to permit imposing emergency in state of Punjab or in specific districts of the state of Punjab.'};
            break;
        case lowercaseUserMessage === '60 amendment':
             response = {
                image:'',
                text : 'Amended In 20 December 1988.Amend article 276.Profession Tax increased from a minimum of Rs. 250/- to a maximum of Rs. 2500/-.'};
            break;
        case lowercaseUserMessage === '61 amendment':
             response = {
                image:'',
                text : 'Amended In 28 March 1989.Amend article 326.Reduce age for voting rights from 21 to 18.'};
            break;
        case lowercaseUserMessage === '62 amendment':
             response = {
                image:'',
                text : 'Amended In 25 January 1990.Amend article 334.Extend reservation for SCs and STs and nomination of Anglo Indian members in Parliament and State Assemblies for another ten years i.e. up to 2000.'};
            break;
        case lowercaseUserMessage === '63 amendment':
             response = {
                image:'',
                text : 'Amended In 6 January 1990.Amend article 356.Remove article 359A.Emergency powers applicable to State of Punjab, accorded in Article 359A as per amendment 59 repealed.'};
            break;
        case lowercaseUserMessage === '64 amendment':
             response = {
                image:'',
                text : 'Amended In 16 April 1990.Amend article 356.Article 356 amended to permit President\'s rule up to three years and six months in the state of Punjab.'};
            break;
        case lowercaseUserMessage === '65 amendment':
             response = {
                image:'',
                text : 'Amended In 12 March 1992.Amend article 338.National Commission for Scheduled Castes and Scheduled Tribes formed and its statutory powers specified in The Constitution.'};
            break;
        case lowercaseUserMessage === '66 amendment':
             response = {
                image:'',
                text : 'Amended In 7 June 1990.Amend schedule 9.Place land reform acts and amendments to these act under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '67 amendment':
             response = {
                image:'',
                text : 'Amended In 4 October 1990.Amend article 356.Article 356 amended to permit President\'s rule up to four years in the state of Punjab.'};
            break;
        case lowercaseUserMessage === '68 amendment':
             response = {
                image:'',
                text : 'Amended In 12 March 1991.Amend article 356.Article 356 amended to permit President\'s rule up to five years in the state of Punjab.'};
            break;
        case lowercaseUserMessage === '69 amendment':
             response = {
                image:'',
                text : 'Amended In 1 February 1992.Insert articles 239AA and 239AB.To provide for a legislative assembly and council of ministers for National Capital Territory of Delhi. Delhi continues to be a Union Territory.'};
            break;
        case lowercaseUserMessage === '70 amendment':
             response = {
                image:'',
                text : 'Amended In 21 December 1991.Amend articles 54 and 239AA.Include National Capital Territory of Delhi and Union Territory of Pondicherry in Electoral College for presidential election.'};
            break;
        case lowercaseUserMessage === '71 amendment':
             response = {
                image:'',
                text : 'Amended In 31 August 1992.Amend schedule 8.Include Konkani, Manipuri and Nepali as official languages.'};
            break;
        case lowercaseUserMessage === '72 amendment':
             response = {
                image:'',
                text : 'Amended In 5 December 1992.Amend article 332.Provide reservation to Scheduled Tribes in Tripura State Legislative Assembly.'};
            break;
        case lowercaseUserMessage === '73 amendment':
             response = {
                image:'',
                text : 'Amended In 24 April 1992.Insert part 9. Insert schedule 11.Statutory provisions for Panchyat Raj as third level of administration in villages.'};
            break;
        case lowercaseUserMessage === '74 amendment':
             response = {
                image:'',
                text : 'Amended In 1 June 1992.Insert part 9A , insert schedule 12 , amend article 280. Insert schedule 11.Statutory provisions for Local Administrative bodies as third level of administration in urban areas such as towns and cities.'};
            break;
        case lowercaseUserMessage === '75 amendment':
             response = {
                image:'',
                text : 'Amended In 15 May 1994.Amend article 323B.Provisions for setting up Rent Control Tribunals.'};
            break;
        case lowercaseUserMessage === '76 amendment':
             response = {
                image:'',
                text : 'Amended In 31 August 1994.Amend schedule 9.Enable continuance of 69% reservation in Tamil Nadu by including the relevant Tamil Nadu Act under 9th Schedule of the constitution.'};
            break;
        case lowercaseUserMessage === '77 amendment':
             response = {
                image:'',
                text : 'Amended In 17 June 1995.Amend article 16.A technical amendment to protect reservation to SCs and STs Employees in promotions.'};
            break;
        case lowercaseUserMessage === '78 amendment':
             response = {
                image:'',
                text : 'Amended In 30 August 1995.Amend schedule 9.Place land reform acts and amendments to these act under Schedule 9 of the constitution.'};
            break;
        case lowercaseUserMessage === '79 amendment':
             response = {
                image:'',
                text : 'Amended In 25 January 2000.Amend article 334.Extend reservation for SCs and STs and nomination of Anglo Indian members in Parliament and State Assemblies for another ten years i.e. up to 2010.'};
            break;
        case lowercaseUserMessage === '80 amendment':
             response = {
                image:'',
                text : 'Amended In 9 June 2000.Amend articles 269 and 270.Remove article 272.Implement Tenth Finance Commission recommendation to simplify the tax structures by pooling and sharing all taxes between states and the centre.'};
            break;
        case lowercaseUserMessage === '81 amendment':
             response = {
                image:'',
                text : 'Amended In 9 June 2000.Amend article 16.Protect SCs and STs reservation in filling backlog of vacancies.'};
            break;
        case lowercaseUserMessage === '82 amendment':
             response = {
                image:'',
                text : 'Amended In 8 September 2000.Amend article 335.Permit relaxation of qualifying marks and other criteria in reservation in promotion for SCs and STs candidates.'};
            break;
        case lowercaseUserMessage === '83 amendment':
             response = {
                image:'',
                text : 'Amended In 8 September 2000.Amend article 243M.Exempt Arunachal Pradesh from reservation for Scheduled Castes in Panchayati Raj institutions.'};
            break;
        case lowercaseUserMessage === '84 amendment':
             response = {
                image:'',
                text : 'Amended In 21 February 2002.Amend articles 55, 81, 82, 170, 330 and 332.Extend the usage of 1971 national census population figures for statewise distribution of parliamentary seats.'};
            break;
        case lowercaseUserMessage === '85 amendment':
             response = {
                image:'',
                text : 'Amended In 4 January 2002.Amend article 16.A technical amendment to protect Consequential seniority in case of promotions of SCs and STs Employees.'};
            break;
        case lowercaseUserMessage === '86 amendment':
             response = {
                image:'',
                text : 'Amended In 12 December 2002.Amend articles 45 and 51A.Insert article 21A.Provides Right to Education until the age of fourteen.'};
            break;
        case lowercaseUserMessage === '87 amendment':
             response = {
                image:'',
                text : 'Amended In 22 June 2003.Amend articles 81, 82, 170 and 330.Extend the usage of 2001 national census population figures for statewise distribution of parliamentary seats.'};
            break;
        case lowercaseUserMessage === '88 amendment':
             response = {
                image:'',
                text : 'Amended In 15 January 2004.Amend article 270.Insert article 268A.Amend schedule 7.To extend statutory cover for levy and utilisation of Service Tax.'};
            break;
        case lowercaseUserMessage === '89 amendment':
             response = {
                image:'',
                text : 'Amended In 28 September 2003.Amend article 338.Insert article 338A.The National Commission for Scheduled Castes and Scheduled Tribes was bifurcated into The National Commission for Scheduled Castes and The National Commission for Scheduled Tribes.'};
            break;
        case lowercaseUserMessage === '90 amendment':
             response = {
                image:'',
                text : 'Amended In 28 September 2003.Amend article 332.Reservation in Assam Assembly relating to Bodoland Territory Area.'};
            break;
        case lowercaseUserMessage === '91 amendment':
             response = {
                image:'',
                text : 'Amended In 1 January 2004.Amend articles 75 and 164.Insert article 361B.Amend schedule 10.Restrict the size of council of ministers to 15% of legislative members & to strengthen Anti Defection laws.'};
            break;
        case lowercaseUserMessage === '92 amendment':
             response = {
                image:'',
                text : 'Amended In 7 January 2003.Amend schedule 8.Include Bodo, Dogri, Santali and Mathili as official languages.'};
            break;
        case lowercaseUserMessage === '93 amendment':
             response = {
                image:'',
                text : 'Amended In 20 January 2006.Amend article 15.To enable provision of reservation (27%) for Other Backward Class(OBCs) in government as well as private educational institutions.'};
            break;
        case lowercaseUserMessage === '94 amendment':
             response = {
                image:'',
                text : 'Amended In 12 June 2006.Amend article 164.To provide for a Minister of Tribal Welfare in newly created Jharkhand and Chhattisgarh States including Madhya Pradesh and Orissa.'};
            break;
        case lowercaseUserMessage === '95 amendment':
             response = {
                image:'',
                text : 'Amended In 25 January 2010.Amend article 334.To extend the reservation of seats for SCs and STs and Anglo-Indian in the Lok Sabha and states assemblies from Sixty years to Seventy years.'};
            break;
        case lowercaseUserMessage === '96 amendment':
             response = {
                image:'',
                text : 'Amended In 23 September 2011.Amend schedule 8.Substituted "Odia" in the place of "Oriya".'};
            break;
        case lowercaseUserMessage === '97 amendment':
             response = {
                image:'',
                text : 'Amended In 12 January 2012.Amend Art 19 and added Art 43B and Part IXB.Added the words "or co-operative societies" after the word "or unions" in Article 19(l)(c) and insertion of article 43B i.e., Promotion of Co-operative Societies and added Part-IXB i.e., The Co-operative Societies. In July 2021 Supreme Court Struck Part of the amendment as it was not ratified by the states.[106]The amendment objective is to encourage economic activities of cooperatives which in turn help progress of rural India. It is expected to not only ensure autonomous and democratic functioning of cooperatives, but also the accountability of the management to the members and other stakeholders.[107]'};
            break;
        case lowercaseUserMessage === '98 amendment':
             response = {
                image:'',
                text : 'Amended In 1 January 2013.To insert Article 371J in the Constitution.To empower the Governor of Karnataka to take steps to develop the Hyderabad-Karnataka Region.'};
            break;
        case lowercaseUserMessage === '99 amendment':
             response = {
                image:'',
                text : 'Amended In 13 April 2015[110] Repealed 16 October 2015.Insertion of new articles 124A, 124B and 124C.Amendments to Articles 127, 128, 217, 222, 224A, 231.Formation of a National Judicial Appointments Commission. 16 State assemblies out of 29 States including Goa, Rajasthan, Tripura, Gujarat and Telangana ratified the Central Legislation, enabling the President of India to give assent to the bill.[111] The amendment was struck down by the Supreme Court on 16 October 2015.'};
            break;
        case lowercaseUserMessage === '100 amendment':
             response = {
                image:'',
                text : 'Amended In 31 July 2015.Amendment of First Schedule to Constitution.Exchange of certain enclave territories with Bangladesh and conferment of citizenship rights to residents of enclaves consequent to signing of Land Boundary Agreement (LBA) Treaty between India and Bangladesh.'};
            break;
        case lowercaseUserMessage === '101 amendment':
             response = {
                image:'',
                text : 'Amended In 1 July 2017.Addition of articles 246A, 269A, 279A. Deletion of Article 268A.Amendment of articles 248, 249, 250, 268, 269, 270, 271, 286, 366, 368, Sixth Schedule, Seventh Schedule.Introduced the Goods and Services Tax.'};
            break;
        case lowercaseUserMessage === '102 amendment':
             response = {
                image:'',
                text : 'Amended In 11 August 2018.Addition of articles 338B, 342A, and Added Clause 26C.Modification of articles 338, 366.Constitutional status to National Commission for Backward Classes.'};
            break;
        case lowercaseUserMessage === '103 amendment':
             response = {
                image:'',
                text : 'Amended In 12 January 2019.Amendment to Article 15, added Clause [6],Amendment to Article 16, added Clause [6].A maximum of 10% Reservation for Economically Weaker Sections (EWSs) of citizens of classes other than the classes mentioned in clauses (4) and (5) of Article 15, i.e. Classes other than socially and educationally backward classes of citizens or the Scheduled Castes and the Scheduled Tribes. Inserted Clause [6] under Article 15 as well as Inserted Clause [6] under Article 16.'};
            break;
        case lowercaseUserMessage === '104 amendment':
             response = {
                image:'',
                text : 'Amended In 25 January 2020.Amend article 334.To extend the reservation of seats for SCs and STs in the Lok Sabha and states assemblies from Seventy years to Eighty years. Removed the reserved seats for the Anglo-Indian community in the Lok Sabha and state assemblies by not extending it further.'};
            break;
        case lowercaseUserMessage === '105 amendment':
             response = {
                image:'',
                text : 'Amended In 10 August 2021.Amended Article 338B, 342A and 366.To restore the power of the state governments to identify Other Backward Classes (OBCs) that are socially and educationally backward. This amendment annulled the Supreme Court judgement of 11 May 2021, which had empowered only the Central government for such identification.'};
            break;
        case lowercaseUserMessage === '106 amendment':
             response = {
                image:'',
                text : 'Amended In 28 September 2023.Amended article 239AA.Insertion of articles 330A, 332A, 334A.To reserve one-third of the seats in the Lok Sabha(330A), state legislative assemblies(332A) and Delhi Legislative Assembly(239AA) for women for a period for 15 years after coming effect.(334A)'};
            break;
        case lowercaseUserMessage === 'important constitutional amendments':
             response = {
                image:'',
                text : '1 Amendment (1951),7 Amendment (1956),8 Amendment (1960),24 Amendment (1971),42 Amendment (1976),44 Amendment (1978),52 Amendment (1985),73 Amendment (1992),74 Amendment (1992),91 Amendment (2003)'};
            break;
            case lowercaseUserMessage === 'tamilnadu':
             response = {
                image:'<img src="images/tn.png" style="width: 160px; height: 200px";/>',
                text : 'There are 38 Districts in Tamilnadu.Tamil Nadu is approximately 130,060 square kilometers.'};
            break;
            case lowercaseUserMessage === 'karnataka':
             response = {
                image:'<img src="images/karnataka.png" style="width: 160px; height: 200px";/>',
                text : 'Karnataka comprises 31 districts.Regarding the area of Karnataka, as a whole, it is approximately 191,791 square kilometers.'};
            break;
            case lowercaseUserMessage === 'india':
             response = {
                image:'<img src="images/india.png" style="width: 160px; height: 200px";/>',
                text : 'India comprises 34 States.India is approximately 3,287,260 square kilometers'};
            break;
            case lowercaseUserMessage === 'cauvery river':
             response = {
                image:'',
                text : 'The Cauvery is one of the most important rivers in South India, and it flows through the central part of Tamil Nadu. It is a major source of water for irrigation and supports agriculture in the region.'};
            break;
            case lowercaseUserMessage === 'vaigai river':
             response = {
                image:'',
                text : 'The Vaigai is another significant river in Tamil Nadu, flowing through the districts of Madurai and Theni. The Vaigai Dam is constructed across this river for irrigation purposes.'};
            break;
            case lowercaseUserMessage === 'thamirabarani river':
             response = {
                image:'',
                text : 'This river flows in the southern part of Tamil Nadu, primarily in the districts of Tirunelveli and Thoothukudi. It is known for its religious significance and supports agriculture in the region.'};
            break;
            case lowercaseUserMessage === 'palar river':
             response = {
                image:'',
                text : 'The Palar River flows through the northern part of Tamil Nadu, and it serves as a crucial water source for the districts of Vellore and Kanchipuram.'};
            break;
            case lowercaseUserMessage === 'bhavani river':
             response = {
                image:'',
                text : 'The Bhavani is a tributary of the Cauvery and flows through the western part of Tamil Nadu. It is known for its scenic beauty and is important for agriculture and hydroelectric power generation.'};
            break;
            case lowercaseUserMessage === 'amaravathi river':
             response = {
                image:'',
                text : 'Amaravathi is another tributary of the Cauvery and flows through the districts of Karur and Tirupur. It joins the Cauvery near Karur.'};
            break;
            case lowercaseUserMessage === 'major rivers of tamilnadu':
             response = {
                image:'',
                text : 'Cauvery,Vaigai(Madurai and Theni)<br>Thamirabarani(Tirunelveli and Thoothukudi)<br>Palar(Vellore and Kanchipuram)<br>Bhavani<br>Amaravathi(Karur and Tirupur)'};
            break;
            case lowercaseUserMessage === 'andhra pradesh':
             response = {
                image:'<img src="images/andhra.png" style="width: 160px; height: 200px";/>',
                text : 'Andhra Pradesh comprises 13 districts.The area of Andhra Pradesh, as a whole, it is approximately 160,205 square kilometers. '};
            break;
            case lowercaseUserMessage === 'kerala':
             response = {
                image:'<img src="images/kerala.png" style="width: 160px; height: 200px";/>',
                text : ' Kerala comprises 14 districts.The total area of Kerala is approximately 38,863 square kilometers.'};
            break;
            case lowercaseUserMessage === 'subash chandra bose':
             response = {
                image:'<img src="images/subash.png" style="width: 160px; height: 200px";/>',
                text : 'Netaji Subhas Chandra Bose, often referred to as Netaji, was a prominent leader in the Indian independence movement against British rule. Here are some key details about Netaji Subhas Chandra Bose<br><b>Birth and Early Life:</b> Netaji Subhas Chandra Bose was born on January 23, 1897, in Cuttack, Odisha, India. He came from a well-educated and affluent family.<br><b>ICS(<i>Indian Civil Service</i>) Rank:3</b>'};
            break;
        case lowercaseUserMessage === 'preamble':
             response = {
                image:'<img src="images/Preamble.png" "width: 160px; height: 200px"/>',
                text : 'Describes the ideals and objectives of the Constitution'};
            break;
        case lowercaseUserMessage === 'part 1':
             response = {
                image:'',
                text : 'The Union and its Territory \n Articles 1-4 deal with the territory of India.'};
            break;
        case lowercaseUserMessage === 'part 2':
             response = {
                image:'',
                text : 'Citizenship \n Articles 5-11 provide information about citizenship.'};
            break;
        case lowercaseUserMessage === 'part 3':
             response = {
                image:'',
                text : 'Fundamental Rights \n Articles 12-35 guarantee fundamental rights to citizens.'};
            break;
        case lowercaseUserMessage === 'part 4':
             response = {
                image:'',
                text : 'Directive Principles of State Policy \n Articles 36-51 provide guidelines for the government.'};
            break;

        case lowercaseUserMessage === 'part 4a':
             response = {
                image:'',
                text : 'Fundamental Duties \n Article 51A specifies the fundamental duties of citizens.'};
            break;

        case lowercaseUserMessage === 'part 5':
             response = {
                image:'',
                text : 'The Union \n Articles 52-151 deal with the President, Vice President, Prime Minister, Council of Ministers, Parliament, etc.'};
            break;

        case lowercaseUserMessage === 'part 6':
             response = {
                image:'',
                text : 'The States \n Articles 152-237 deal with the Governor, Chief Minister, State Legislature, etc.'};
            break;

        case lowercaseUserMessage === 'part 7':
             response = {
                image:'',
                text : 'States in the B part of the First Schedule \n Articles 238-241 contain special provisions relating to certain states.'};
            break;

        case lowercaseUserMessage === 'part 8':
             response = {
                image:'',
                text : 'The Union Territories \n Articles 239-242 deal with Union Territories.'};
            break;

        case lowercaseUserMessage === 'part 9':
             response = {
                image:'',
                text : 'The Panchayats \n Articles 243-243O provide for Panchayats.'};
            break;

        case lowercaseUserMessage === 'part 9a':
             response = {
                image:'',
                text : 'The Municipalities \n Articles 243P-243ZG deal with Municipalities.'};
            break;

        case lowercaseUserMessage === 'part 10':
             response = {
                image:'',
                text : 'The Scheduled and Tribal Areas \n Articles 244-244A contain special provisions for certain areas.'};
            break;

        case lowercaseUserMessage === 'part 11':
             response = {
                image:'',
                text : 'Relations between the Union and the States \n Articles 245-263 deal with legislative relations between the Union and the States.'};
            break;

        case lowercaseUserMessage === 'part 12':
             response = {
                image:'',
                text : 'Finance, Property, Contracts, and Suits \n Articles 264-300A deal with financial matters.'};
            break;

        case lowercaseUserMessage === 'part 13':
             response = {
                image:'',
                text : 'Trade, Commerce, and Intercourse within the Territory of India \n Articles 301-307 deal with trade and commerce.'};
            break;

        case lowercaseUserMessage === 'part 14':
             response = {
                image:'',
                text : 'Services under the Union and the States \n Articles 308-323 deal with services.'};
            break;

        case lowercaseUserMessage === 'part 14a':
             response = {
                image:'',
                text : 'Tribunals \n Articles 323A-323B provide for administrative tribunals.'};
            break;

        case lowercaseUserMessage === 'part 15':
             response = {
                image:'',
                text : 'Elections \n Articles 324-329B deal with elections.'};
            break;

        case lowercaseUserMessage === 'part 16':
             response = {
                image:'',
                text : 'Special Provisions Relating to Certain Classes \n Articles 330-342 deal with special provisions for Scheduled Castes, Scheduled Tribes, and Anglo-Indians.'};
            break;

        case lowercaseUserMessage === 'part 17':
             response = {
                image:'',
                text : 'Official Language \n Articles 343-351 deal with the official language.'};
            break;

        case lowercaseUserMessage === 'part 18':
             response = {
                image:'',
                text : 'Emergency Provisions \n Articles 352-360 deal with emergency provisions.'};
            break;

        case lowercaseUserMessage === 'part 19':
             response = {
                image:'',
                text : 'Miscellaneous \n Articles 361-367A cover various miscellaneous provisions.'};
            break;

        case lowercaseUserMessage === 'part 20':
             response = {
                image:'',
                text : 'Amendment of the Constitution \n Article 368 provides the procedure for amending the Constitution.'};
            break;

        case lowercaseUserMessage === 'part 21':
             response = {
                image:'',
                text : 'Temporary, Transitional, and Special Provisions \n Articles 369-392 contain temporary provisions.'};
            break;

        case lowercaseUserMessage === 'part 22':
             response = {
                image:'',
                text : 'Short Title, Commencement, Authoritative Text in Hindi, and Repeals \n Articles 393-395 contain final provisions.'};
            break;
        case lowercaseUserMessage === 'schedule 1':
             response = {
                image:'',
                text : 'Contains details about the states and union territories of India, along with their territories and names.'};
            break;

        case lowercaseUserMessage === 'schedule 2':
             response = {
                image:'',
                text : 'Specifies the emoluments for high-level officials such as the President, Vice President, Governors, etc.'};
            break;

        case lowercaseUserMessage === 'schedule 3':
             response = {
                image:'',
                text : 'Outlines the forms of oaths and affirmations for elected officials, judges, and others.'};
            break;

        case lowercaseUserMessage === 'schedule 4':
             response = {
                image:'',
                text : 'Deals with the allocation of seats in the Rajya Sabha (Council of States) to states and union territories.'};
            break;

        case lowercaseUserMessage === 'schedule 5':
             response = {
                image:'',
                text : 'Pertains to the administration and control of Scheduled Areas and Scheduled Tribes.'};
            break;

        case lowercaseUserMessage === 'schedule 6':
             response = {
                image:'',
                text : 'Contains provisions for the administration of tribal areas in the states of Assam, Meghalaya, Tripura, and Mizoram.'};
            break;

        case lowercaseUserMessage === 'schedule 7':
             response = {
                image:'',
                text : 'Enumerates the distribution of powers between the Union and the States in terms of the three lists—Union List, State List, and Concurrent List.'};
            break;

        case lowercaseUserMessage === 'schedule 8':
             response = {
                image:'',
                text : 'Lists the official languages recognized by the Indian Constitution.'};
            break;

        case lowercaseUserMessage === 'schedule 9':
             response = {
                image:'',
                text : 'Originally added to protect land reforms and other laws from judicial review. It has been amended several times.'};
            break;

        case lowercaseUserMessage === 'schedule 10':
             response = {
                image:'',
                text : 'Deals with the disqualification of members on the ground of defection.'};
            break;

        case lowercaseUserMessage === 'schedule 11':
             response = {
                image:'',
                text : 'Contains provisions related to the powers, authority, and responsibilities of Panchayats.'};
            break;

        case lowercaseUserMessage === 'schedule 12':
             response = {
                image:'',
                text : 'Contains provisions related to the powers, authority, and responsibilities of Municipalities.'};
            break;

        case lowercaseUserMessage === 'article 1':
             response = {
                image:'',
                text : 'Name and territory of the Union.'};
            break;

        case lowercaseUserMessage === 'article 2':
             response = {
                image:'',
                text : 'Admission or establishment of new States.'};
            break;

        case lowercaseUserMessage === 'article 2a':
             response = {
                image:'',
                text : 'Sikkim to be associated with Union (Repealed).'};
            break;

        case lowercaseUserMessage === 'article 3':
             response = {
                image:'',
                text : 'Formation of new States and alteration of areas, boundaries or names of existing States.'};
            break;

        case lowercaseUserMessage === 'article 4':
             response = {
                image:'',
                text : 'Laws made under articles 2 and 3 to provide for the amendment of the First and the Fourth Schedules and supplemental, incidental and consequential matters.'};
            break;

        case lowercaseUserMessage === 'i love you':
             response = {
                image:'',
                text : 'Sorry I have a boyfriend'};
            break;
        case lowercaseUserMessage === 'do you have parthi number':
             response = {
                image:'',
                text : 'Yes, its 82******00'};
            break;
        case lowercaseUserMessage === 'what is your boyfriend name':
             response = {
                image:'',
                text : 'Parthi❤️'};
            break;
        case lowercaseUserMessage === 'kamarajar':
             response = {
                image:'<img src="images/kama.jfif" style="width: 160px; height: 200px;"/>',
                text : 'Kamaraj was born on 15 July 1903 in Virudhunagar, Tamil Nadu father Kumaraswami Nadar and Mother Sivakami Ammal for more information visit this link https://en.wikipedia.org/wiki/K._Kamaraj'};
            break;
            case lowercaseUserMessage === 'bhagat singh':
            response = {
                image: '<img src="images/bahat.jfif" style="width: 160px; height: 200px;"/>',
                text: 'Bhagat Singh, born on September 28, 1907, in Banga, India, was a revolutionary freedom fighter. He is remembered for his sacrifice in the struggle against British colonial rule and his commitment to socialism and secularism.'
            };
            break;
            case lowercaseUserMessage === 'voc':
            response = {
                image: '<img src="images/voc.jpg" style="width: 160px; height: 200px;"/>',
                text: '<br>V. O. Chidambaram Pillai, born on September 5, 1872, in Ottapidaram, India, was a freedom fighter and a prominent leader in the Indian National Congress. He is remembered for his efforts in the Swadeshi movement and his role in the economic and political spheres.'
            };
            break;
        case lowercaseUserMessage === 'who is parthi':
             response = {
                image:'',
                text : 'Parthi is my mama ❤️'};
            break;
        case lowercaseUserMessage === 'do you know to ride bike':
             response = {
                image:'',
                text : 'yes parthi teach me how to ride bike'};
            break;
        case lowercaseUserMessage === 'fine':
             response = {
                image:'',
                text : 'how can i help you'};
            break;
        case lowercaseUserMessage === 'good':
             response = {
                image:'',
                text : 'okay how can i help you'};
            break;
        case lowercaseUserMessage === 'nice':
             response = {
                image:'',
                text : 'sounds good how can i help you'};
            break;
        case lowercaseUserMessage === 'not bad':
             response = {
                image:'',
                text : 'how can i help you'};
            break;
        case lowercaseUserMessage === 'saptiya':
             response = {
                image:'',
                text : 'im just a chatbot thank you for asking'};
            break;
        case lowercaseUserMessage === 'ena panra':
             response = {
                image:'',
                text : 'suma than online la'};
            break;
        case lowercaseUserMessage === 'unaku yara romba pudikum':
             response = {
                image:'',
                text : 'Parthi❤️'};
            break;
        case lowercaseUserMessage === 'where are you from':
             response = {
                image:'',
                text : 'Parthi\'s heart❤️'};
            break;
        case lowercaseUserMessage === 'na yar nu theriyum ah':
             response = {
                image:'',
                text : 'theriyathu'};
            break;
        case lowercaseUserMessage === 'hello':
             response = {
                image:'',
                text : 'Hi there!'};
            break;
        case lowercaseUserMessage === 'how are you':
             response = {
                image:'',
                text : 'I am just a chatbot, but thanks for asking!'};
            break;
        case lowercaseUserMessage === 'goodbye':
        case lowercaseUserMessage === 'bye bye':
        case lowercaseUserMessage === 'close':
        case lowercaseUserMessage === 'bye':
        case lowercaseUserMessage === 'exit':
        case lowercaseUserMessage === 'shut down':
        case lowercaseUserMessage === 'shutdown':
             response = {
                image:'',
                text : 'Goodbye! Have a great day!'};
            break;
        case lowercaseUserMessage.startsWith('a'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('b'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('c'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('d'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('e'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('f'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('g'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('hi im'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(5)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('h'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('i'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(3)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('j'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('k'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('l'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('m'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('n'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('o'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('p'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('q'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('r'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('s'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('t'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('u'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('v'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('w'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('x'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('y'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        case lowercaseUserMessage.startsWith('z'):
             response = {
                image:'',
                text : `Hi ${userMessage.slice(0)}! 'How are you'`};
            break;
        default:
             response = {
                image:'',
                text : 'Sorry I dont Understand'};
    }

    appendMessage('Bujjii', response.image + response.text);
}
