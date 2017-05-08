<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:template match="catalog">

        <html>
            <head>
                <title> Fragen </title>
                <style>
                    div {
                        max-width: 1000px;
                        margin: auto;
                        background-color: #EFF; 
                    }
                </style>

            </head>

            <body>

        <div>
            
                <xsl:for-each select="question">
                    <h3> <span style="color: blue"> <em>Frage:</em> </span> 
                    <xsl:value-of select="issue"/>
                    </h3>
                    <xsl:for-each select="answer">
                        <p> <span style="color: red"> > </span>
                            <xsl:value-of select="."/>
                        </p>
                    </xsl:for-each>
                    <h4> <span style="color: blue"> Dauer: </span>  
                    <xsl:value-of select="timeout"/>
                    </h4>
                        <hr/>
                </xsl:for-each>
            
        </div>
            </body>

        </html>

    </xsl:template>
</xsl:stylesheet>
