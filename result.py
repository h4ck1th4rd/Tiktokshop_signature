from requests_html import HTMLSession

class Signature(object):
    """
    获取_signature
    """
    @classmethod
    def get_signature(cls):
        session = HTMLSession()
        r = session.get('http://127.0.0.1:3000/test.html', verify=False)
        r.html.render()
        d = r.html.find('#pid', first=True)
        return d.text

if __name__ == '__main__':
    _signature = Signature.get_signature()
    print(_signature)
