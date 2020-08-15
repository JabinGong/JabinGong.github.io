import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.lang.model.util.Elements;

import org.jsoup.Jsoup;

public class ParsePublications {
    public static void main(String[] args) throws Exception {
        File file = new File("./pubs.txt");
        BufferedReader br = new BufferedReader(new FileReader(file));
        
        Stream<String> lines = br.lines();
        List<String> list = lines.collect(Collectors.toList());
        List<String[]> publications = new ArrayList<>();
        list.forEach(pub -> {
            publications.add(pub.split("/"));
        });

        String output = "";
        for (String[] pub : publications) {
            String url = getUrl(pub[1]);
            String picture = getPicture(url);
            System.out.println(picture);
            output += String.format("generatePub(%s,%s,%s,%s,%s,%s);\n\n", String.format("\"%s\"", picture), String.format("\"%s\"", pub[0]), String.format("\"%s\"", pub[1]), String.format("\"%s\"", pub[2]), String.format("\"%s\"", pub[3]), String.format("\"%s\"", url));
        }
        System.out.println(output);
    }

    private static String getUrl(String pubName) throws IOException {
        String url = null;
        Stream<String> soup = Jsoup.connect("https://www.google.com.au/search?q=" + pubName).maxBodySize(0).get()
            .select(".r").select("a")
            .stream()
            .limit(5)
            .map(l -> l.attr("href"));

        String[] soupArr = soup.toArray(String[]::new);
        for (String link : soupArr) {
            if (!(link.startsWith("https://scholar") || link.startsWith("http://scholar"))) {
                url = link;
                break;
            }
        }
        return url;
        
    }

    private static String getPicture(String url) throws IOException {
        String pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
        Stream<String> soup = Jsoup.connect(url).maxBodySize(0).get()
            .select("div.article_abstract-img,div.capsule__article-image,p.articleBody_abstractText").select("img")
            .stream()
            .limit(1)
            .map(l -> l.attr("src"));

        String[] soupArr = soup.toArray(String[]::new);
        for (String src : soupArr) {
            pic = src.split("/")[src.split("/").length - 1];
            pic = pic.substring(0, pic.length() - 4) + ".png";
            // downloadImage(picName, url);
        }
        return pic;
    }

    private static String getSiteStem(String site) {
        String pattern = ".*((\\.com\\/)|(\\.org\\/)|(\\.gov\\/))";
        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(site);
        m.find();
        return m.group(0);
    }

    private static void downloadImage(String src, String site) {
        try {
            //open the stream from URL
            URL urlImage = new URL(getSiteStem(site) + src);
            InputStream in = urlImage.openStream();
            
            byte[] buffer = new byte[4096];
            int n = -1;
            
            OutputStream os = 
                new FileOutputStream("/Users/jabingong/Downloads/GongLab/img/pubs/" + src.split("/")[src.split("/").length - 1]);
            
            //write bytes to the output stream
            while ( (n = in.read(buffer)) != -1 ){
                os.write(buffer, 0, n);
            }
            
            //close the stream
            os.close();
            
            System.out.println("Image saved");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    
}