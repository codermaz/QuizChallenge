package SaxParserExample;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class ReadXml extends DefaultHandler {
	int answerNo=0;
	
	public void getXml() {
	
		
		try {
			// obtain and configure a SAX based parser
			SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();

			// obtain object for SAX parser
			SAXParser saxParser = saxParserFactory.newSAXParser();

			// default handler for SAX handler class
			// all three methods are written in handler's body
			DefaultHandler defaultHandler = new DefaultHandler() {

				String issueTag = "close";
				String[] answerTag = new String[4]={ "close","close","close","close" };
				
				
				String timeoutTag = "close";
			

				
				
				// this method is called every time the parser gets an open tag
				// '<'
				// identifies which tag is being open at time by assigning an
				// open flag
				public void startElement(String uri, String localName, String qName, Attributes attributes)
						throws SAXException {

					if (qName.equalsIgnoreCase("ISSUE")) {
						issueTag = "open";
					}
					if (qName.equalsIgnoreCase("ANSWER")) {
						answerNo++;
						answerTag[0] = "open";
					}
					
					if (qName.equalsIgnoreCase("TIMEOUT")) {
						timeoutTag = "open";
					}
				}

				// prints data stored in between '<' and '>' tags
				public void characters(char ch[], int start, int length) throws SAXException {

					if (issueTag.equals("open")) {
						System.out.println("Issue: " + new String(ch, start, length));
					}
					if (answerTag[0].equals("open")) {
						System.out.println("Answer 1: " + new String(ch, start, length));
					}
			
				}

				// calls by the parser whenever '>' end tag is found in xml
				// makes tags flag to 'close'
				public void endElement(String uri, String localName, String qName) throws SAXException {

					if (qName.equalsIgnoreCase("issue")) {
						issueTag = "close";
					}
					if (qName.equalsIgnoreCase("answer")) {
						answerTag[0] = "close";
					}
	
					
					if (qName.equalsIgnoreCase("answer")) {
						timeoutTag = "close";
					}

				}
			};

			// parse the XML specified in the given path and uses supplied
			// handler to parse the document
			// this calls startElement(), endElement() and character() methods
			// accordingly
			saxParser.parse("Catalogs/systemprogrammierung.xml", defaultHandler);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
