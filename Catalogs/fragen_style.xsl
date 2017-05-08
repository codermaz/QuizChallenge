<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:template match="catalog">

        <html>
            <head>
                <title> Fragen </title>
            </head>

            <body>

                <table>
                    <thead>
                        <tr>
                            <th> Frage </th>
                            <th> Dauer </th>
                            <th> A </th>
                            <th> B </th>
                            <th> C </th>
                            <th> D </th>
                        </tr>
                    </thead>
                    <tbody>

                        <xsl:for-each select="question">
                            <tr>
                                <td>
                                    <xsl:value-of select="issue"/>
                                </td>
                                <td>
                                    <xsl:value-of select="timeout"/>
                                </td>
                                <xsl:for-each select="answer">

                                    <td>
                                        <xsl:value-of select="."/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                        </xsl:for-each>


                    </tbody>


                </table>

            </body>

        </html>

    </xsl:template>
</xsl:stylesheet>
